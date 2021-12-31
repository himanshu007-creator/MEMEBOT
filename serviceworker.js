const CACHE_REFERENCE = "version-1";
const urlscache = ["index.html", "offline.html"];
const self = this; //lets go of the error
// installation of service
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_REFERENCE).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlscache);
    })
  );
});
// Listen requests
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request)).then(() => {
    return fetch(event.request).catch(() => {
      caches.match("offline.html");
    });
  });
});

// activate serviceworker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_REFERENCE);
  event.waitUntil(
    caches.keys().then((cachenames) => {
      Promise.all(
        cachenames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
