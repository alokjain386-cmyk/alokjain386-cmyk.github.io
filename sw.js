const C="kalandr-v9";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","icon-192.png"])).catch(()=>{}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k)).catch(()=>{});return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match("index.html"))))});
