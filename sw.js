// Service worker: rede primeiro (pega questões novas assim que publicadas), cache como reserva para estudar offline.
const CACHE = "trilhagcm-v3";
const CORE = ["./", "index.html", "app.js", "manifest.webmanifest", "questoes/01-base.js", "questoes/02-leis-municipais-e-federais.js", "questoes/03-simulados-vale.js", "questoes/04-estrategia-penal.js", "questoes/05-estrategia-penal-2.js", "questoes/06-estrategia-constitucional-1.js", "questoes/07-estrategia-constitucional-2.js", "questoes/99-links-vale.js", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
});
