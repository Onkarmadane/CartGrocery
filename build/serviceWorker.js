// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
// // This will work!
// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.CacheFirst()
//   );

const cacheName = "my-pwa-shell-v1.0";
const filesToCache = [
    "/",
    "index.html",
    "./js/index.js",
    "./styles/styles.css",
    '/manifest.json',
    './assets/icons/icon.png',
    './assets/nike1.jpeg'
];

self.addEventListener("install", e => {
    console.log("[ServiceWorker] - Install");
    e.waitUntil((async () => {
            const cache = await caches.open(cacheName);
            console.log("[ServiceWorker] - Caching app shell");
            await cache.addAll(filesToCache);
        })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
      const keyList = await caches.keys();
      await Promise.all(
          keyList.map(key => {
              /*E.g if key has a value of "cache-v1.0" and cacheName has a value of "cache-v2.0",
              we are removing the "cache-v1.0".
              */
              if (key !== cacheName) {
                  console.log("[ServiceWorker] - Removing old cache", key);
                  return caches.delete(key);
              }
          })
      );
  })());
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith((async () => {
      const resource = await caches.match(e.request);
      
      return resource || fetch(e.request);
  })());
});