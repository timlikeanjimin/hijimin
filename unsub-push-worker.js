// UNSUB Push Notification Worker (Cloudflare Workers)
// Handles Web Push subscriptions and sends daily billing reminders

// ─── VAPID Keys (generated) ───────────────────────────────────────
const VAPID_PUBLIC_KEY  = 'BLu6Kn6_yeWatDZ5HAOXPRPgK6J4SdoVb8WlJF0lVs39RLLM8MHXAURio2EUX4rAuiFc2tM41yegs_-TDh5HOVw';
const VAPID_JWK = {
  kty: 'EC', crv: 'P-256',
  d: 'gTJt0L-nobsONCh3shDTqsy7RSyM49n-dbea8nf9vLU',
  x: 'u7oqfr_J5Zq0NnkcA5c9E-AronhJ2hVvxaUkXSVWzf0',
  y: 'RLLM8MHXAURio2EUX4rAuiFc2tM41yegs_-TDh5HOVw',
};
const VAPID_SUBJECT = 'mailto:rkdalwjd080522@gmail.com';
const CORS_ORIGIN   = 'https://timlikeanjimin.github.io';

// ─── Utils ────────────────────────────────────────────────────────
function fromB64u(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(str.length + (4 - str.length % 4) % 4, '=');
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0));
}
function toB64u(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function concat(...arrays) {
  const out = new Uint8Array(arrays.reduce((s, a) => s + a.length, 0));
  let i = 0; for (const a of arrays) { out.set(a, i); i += a.length; }
  return out;
}
const enc = new TextEncoder();

// ─── HKDF ─────────────────────────────────────────────────────────
async function hkdfExtract(salt, ikm) {
  const k = await crypto.subtle.importKey('raw', salt, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', k, ikm));
}
async function hkdfExpand(prk, info, len) {
  const k = await crypto.subtle.importKey('raw', prk, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', k, concat(info, new Uint8Array([1])))).slice(0, len);
}

// ─── Web Push Payload Encryption (RFC 8291) ───────────────────────
async function encryptPush(subscription, payload) {
  const uaPub  = fromB64u(subscription.keys.p256dh);
  const auth   = fromB64u(subscription.keys.auth);
  const kp     = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const asPub  = new Uint8Array(await crypto.subtle.exportKey('raw', kp.publicKey));
  const uaKey  = await crypto.subtle.importKey('raw', uaPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const ecdh   = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, kp.privateKey, 256));
  const salt   = crypto.getRandomValues(new Uint8Array(16));

  const prkKey = await hkdfExtract(auth, ecdh);
  const ikm    = await hkdfExpand(prkKey, concat(enc.encode('WebPush: info\x00'), uaPub, asPub), 32);
  const prk2   = await hkdfExtract(salt, ikm);
  const cek    = await hkdfExpand(prk2, concat(enc.encode('Content-Encoding: aes128gcm\x00'), new Uint8Array([1])), 16);
  const nonce  = await hkdfExpand(prk2, concat(enc.encode('Content-Encoding: nonce\x00'), new Uint8Array([1])), 12);

  const ck = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const ct = new Uint8Array(await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: nonce }, ck,
    concat(enc.encode(JSON.stringify(payload)), new Uint8Array([0x02]))
  ));
  const rs = new Uint8Array(4); new DataView(rs.buffer).setUint32(0, 4096, false);
  return concat(salt, rs, new Uint8Array([65]), asPub, ct);
}

// ─── VAPID JWT ────────────────────────────────────────────────────
async function vapidJwt(endpoint) {
  const aud = new URL(endpoint).origin;
  const now = Math.floor(Date.now() / 1000);
  const hdr = toB64u(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const pay = toB64u(enc.encode(JSON.stringify({ aud, exp: now + 43200, sub: VAPID_SUBJECT })));
  const key = await crypto.subtle.importKey('jwk', VAPID_JWK, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, enc.encode(`${hdr}.${pay}`));
  return `${hdr}.${pay}.${toB64u(sig)}`;
}

// ─── Send Push ────────────────────────────────────────────────────
async function sendPush(subscription, payload) {
  const jwt  = await vapidJwt(subscription.endpoint);
  const body = await encryptPush(subscription, payload);
  const res  = await fetch(subscription.endpoint, {
    method: 'POST',
    headers: {
      'Authorization':    `vapid t=${jwt},k=${VAPID_PUBLIC_KEY}`,
      'Content-Type':     'application/octet-stream',
      'Content-Encoding': 'aes128gcm',
      'TTL':              '86400',
    },
    body,
  });
  return res.status;
}

// ─── Daily Reminders ─────────────────────────────────────────────
async function sendReminders(env) {
  const data = await env.PUSH_KV.get('subscription', 'json');
  if (!data) return;
  const { subscription, subs } = data;

  const todayDay    = new Date().getDate();
  const tomorrowDay = new Date(Date.now() + 86400000).getDate();

  const todayDue    = subs.filter(s => s.billingDay === todayDay);
  const tomorrowDue = subs.filter(s => s.billingDay === tomorrowDay);

  if (todayDue.length) {
    await sendPush(subscription, {
      title: '💳 오늘 결제일이에요!',
      body:  todayDue.map(s => `${s.emoji} ${s.name} — ${s.priceLabel}`).join('\n'),
      url:   '/hijimin/unsub.html',
    });
  }
  if (tomorrowDue.length) {
    await sendPush(subscription, {
      title: '⏰ 내일 결제 예정',
      body:  tomorrowDue.map(s => `${s.emoji} ${s.name} — ${s.priceLabel}`).join('\n'),
      url:   '/hijimin/unsub.html',
    });
  }
}

// ─── CORS Headers ─────────────────────────────────────────────────
function cors(origin) {
  return {
    'Access-Control-Allow-Origin':  origin === CORS_ORIGIN ? origin : '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
function jsonRes(data, origin, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
  });
}

// ─── Main Handler ─────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const url    = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors(origin) });

    // POST /unsub/subscribe — save subscription + billing days
    if (url.pathname === '/unsub/subscribe' && request.method === 'POST') {
      try {
        const { subscription, subs } = await request.json();
        await env.PUSH_KV.put('subscription', JSON.stringify({ subscription, subs, updatedAt: Date.now() }));
        return jsonRes({ ok: true }, origin);
      } catch (e) {
        return jsonRes({ error: e.message }, origin, 400);
      }
    }

    // POST /unsub/test — trigger test notification
    if (url.pathname === '/unsub/test' && request.method === 'POST') {
      try {
        const data = await env.PUSH_KV.get('subscription', 'json');
        if (!data) return jsonRes({ error: 'no subscription' }, origin, 404);
        const status = await sendPush(data.subscription, {
          title: '🔔 UNSUB 알림 테스트',
          body:  '백그라운드 알림이 정상 작동해요!',
          url:   '/hijimin/unsub.html',
        });
        return jsonRes({ ok: true, pushStatus: status }, origin);
      } catch (e) {
        return jsonRes({ error: e.message }, origin, 500);
      }
    }

    return jsonRes({ service: 'UNSUB Push Service', vapidPublicKey: VAPID_PUBLIC_KEY }, origin);
  },

  // Cron trigger — runs daily at 00:00 UTC (09:00 KST)
  async scheduled(event, env, ctx) {
    ctx.waitUntil(sendReminders(env));
  },
};
