const CACHE_NAME = "permanencia-fas-v9";
const ASSETS = [
  "./",
  "./index.html",
  "./css/tactical.css",
  "./js/syllabus-data.js",
  "./js/study-guides-data.js",
  "./js/schemas-data.js",
  "./js/questions-data.js",
  "./js/questions-extra-data.js",
  "./js/questions-wave2-data.js",
  "./js/questions-wave3-data.js",
  "./js/questions-wave4-data.js",
  "./js/questions-wave5-data.js",
  "./js/flashcards-data.js",
  "./js/storage.js",
  "./js/cloud-sync.js",
  "./js/simulator.js",
  "./js/app.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Estrategia Network-First con respaldo Offline para tener siempre la última versión
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (event.request.method === "GET" && networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
