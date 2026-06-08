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
  const tomorrow = new Date(now);
  tomorrow.setDate(today + 1);
  const tomorrowDay = tomorrow.getDate();

  subscriptions.forEach(sub => {
    if (sub.billingDay === undefined || sub.billingDay === null || sub.billingDay === '') return;
    const day = parseInt(sub.billingDay, 10);
    if (isNaN(day)) return;

    if (day === today) {
      self.registration.showNotification('💳 오늘 결제일이에요!', {
        body: `${sub.emoji || ''} ${sub.name} · ${sub.price} ${sub.currency === 'KRW' ? '원' : sub.currency}`,
        icon: '/hijimin/icon-192.png',
        badge: '/hijimin/icon-72.png',
        tag: 'unsub-today-' + sub.name,
        data: { url: '/hijimin/unsub.html' }
      });
    } else if (day === tomorrowDay) {
      self.registration.showNotification('⏰ 내일 결제 예정', {
        body: `${sub.emoji || ''} ${sub.name} · ${sub.price} ${sub.currency === 'KRW' ? '원' : sub.currency}`,
        icon: '/hijimin/icon-192.png',
        badge: '/hijimin/icon-72.png',
        tag: 'unsub-tomorrow-' + sub.name,
        data: { url: '/hijimin/unsub.html' }
      });
    }
  });
});
