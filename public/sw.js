const CACHE_NAME = 'gtm-cache-v1';
const GTM_SCRIPT_URL = 'https://api.tecnicassecretas.site/rzglcgfkl.js';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(GTM_SCRIPT_URL).catch(() => {
        console.log('GTM script will be cached on first request');
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.hostname === 'api.tecnicassecretas.site') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            const cachedDate = new Date(cachedResponse.headers.get('date'));
            const now = new Date();

            if (now - cachedDate < CACHE_DURATION) {
              fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                  cache.put(event.request, networkResponse.clone());
                }
              }).catch(() => {});

              return cachedResponse;
            }
          }

          return fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              if (cachedResponse) {
                return cachedResponse;
              }
              throw new Error('Network failed and no cache available');
            });
        });
      })
    );
  }
});
