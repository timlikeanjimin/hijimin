// Simple offline cache for LottoSmart (bump CACHE to invalidate).
const CACHE = 'lottosmart-v1';
const CORE = [
  './',
  './index.html',
  './today.html',
  './fortune.html',
  './face.html',
  './compatibility.html',
  './zodiac.html',
  './premium.html',
  './style.css?v=12',
  './main.js?v=13',
  './icon.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function () {}); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Never cache the weather API or cross-origin requests; always go to network.
  if (url.origin !== self.location.origin) return;
  // Network-first for HTML so content stays fresh; fall back to cache offline.
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') !== -1) {
    e.respondWith(
      fetch(req).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () { return caches.match(req).then(function (m) { return m || caches.match('./today.html'); }); })
    );
    return;
  }
  // Cache-first for static assets.
  e.respondWith(
    caches.match(req).then(function (m) {
      return m || fetch(req).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      });
    })
  );
});
