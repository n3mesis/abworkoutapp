// Basic service worker
self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
    // Simple fetch handler; let network requests proceed
    event.respondWith(fetch(event.request));
});
