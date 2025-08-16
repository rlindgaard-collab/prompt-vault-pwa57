
const CACHE = 'prompt-vault-json-v1';
const OFFLINE_URLS = ['/', '/index.html', '/manifest.webmanifest', '/prompts.json'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(OFFLINE_URLS)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then(cached => {
      const fetched = fetch(request).then(resp => {
        if (resp.ok && request.url.startsWith(self.location.origin)) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(request, copy));
        }
        return resp;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
