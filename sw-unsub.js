// sw-unsub.js — Service Worker for UNSUB

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Background push notification (from Cloudflare Worker)
self.addEventListener('push', event => {
  let data = { title: '💳 UNSUB 알림', body: '결제 일정을 확인하세요', url: '/hijimin/unsub.html' };
  try { if (event.data) data = { ...data, ...event.data.json() }; } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/hijimin/unsub-icon.svg',
      badge: '/hijimin/unsub-icon.svg',
      tag: 'unsub-push',
      data: { url: data.url },
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/hijimin/unsub.html';
  event.waitUntil(clients.openWindow(url));
});

self.addEventListener('message', event => {
  if (!event.data || event.data.type !== 'CHECK_PAYMENTS') return;

  const subscriptions = event.data.subscriptions || [];
  const now = new Date();
  const today = now.getDate();
  const tomorrowDate = new Date(now);
  tomorrowDate.setDate(today + 1);
  const tomorrowDay = tomorrowDate.getDate();

  function fmtPrice(price, currency) {
    if (currency === 'KRW') return '₩' + Number(price).toLocaleString();
    if (currency === 'USD') return '$' + Number(price).toFixed(2);
    return '€' + Number(price).toFixed(2);
  }

  subscriptions.forEach(sub => {
    if (sub.billingDay === undefined || sub.billingDay === null || sub.billingDay === '') return;
    const day = parseInt(sub.billingDay, 10);
    if (isNaN(day)) return;

    if (day === today) {
      self.registration.showNotification('💳 오늘 결제일이에요!', {
        body: (sub.emoji ? sub.emoji + ' ' : '') + sub.name + ' · ' + fmtPrice(sub.price, sub.currency),
        icon: '/hijimin/icon-192.png',
        badge: '/hijimin/icon-72.png',
        tag: 'unsub-today-' + sub.name,
        data: { url: '/hijimin/unsub.html' }
      });
    } else if (day === tomorrowDay) {
      self.registration.showNotification('⏰ 내일 결제 예정', {
        body: (sub.emoji ? sub.emoji + ' ' : '') + sub.name + ' · ' + fmtPrice(sub.price, sub.currency),
        icon: '/hijimin/icon-192.png',
        badge: '/hijimin/icon-72.png',
        tag: 'unsub-tomorrow-' + sub.name,
        data: { url: '/hijimin/unsub.html' }
      });
    }
  });
});
