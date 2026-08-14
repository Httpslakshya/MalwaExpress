const CACHE_NAME = 'malwa-express-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/malwa.png',
  './assets/bg-inside.jpg',
  './assets/bg-outside.jpg',
  './assets/rain-bg-image.jpg',
  './fx/freesound_community-sfx-cassette-tape-motor-30698.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same-origin or static assets
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Exclude audio streaming and realtime supabase requests from SW cache
  if (url.pathname.includes('/new songs/') || url.pathname.includes('/conductor audios/') || url.hostname.includes('supabase.co')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        // Cache newly fetched images/fonts/styles
        if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/fx/')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
