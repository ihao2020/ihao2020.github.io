const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"iHao"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"788d1c72fbd11694443c57e65446d6fc",url:"./404.html"},{revision:"e09b61ea7c24b19dfc7371760971874a",url:"./index.html"},{revision:"b28662bf81abe2838d20faf2980f0034",url:"./js/main.js"},{revision:"4d449e68f37c9838411fa09c1c792e58",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();