self.addEventListener("install", e =>{
    e.waitUntil(
            caches.open("static").then(cache => {
                return cache.addAll(["/",
                "/src/index.css",
                "/src/index.js",
                "/img/logo-512.png",
                "/img/cancel.svg",
                "/img/more.svg",
                "/img/√.svg",
                "/index.html",
                "https://fonts.googleapis.com/css2?family=Inter&display=swap"]);
            }
        )
    )
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});