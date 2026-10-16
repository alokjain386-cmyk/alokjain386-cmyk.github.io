const C="kalandr-v33";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all([c.addAll(["./","index.html","icon-192.png","privacy.html","delete.html"]).catch(()=>{}),c.add(new Request("https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js",{mode:"no-cors"})).catch(()=>{})])).catch(()=>{}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k)).catch(()=>{});return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match("index.html"))))});
