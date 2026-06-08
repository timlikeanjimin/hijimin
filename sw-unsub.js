// sw-unsub.js — Service Worker for UNSUB

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/hijimin/unsub.html')
  );
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
