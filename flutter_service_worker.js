'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "478a185e8fbddf9ba2f658f917958ae7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "bcd6a9213a2a4a980e4c65662966640f",
"icons/Icon-192.png": "27ddc6f18c6f92f8ae6021cb499b5a6e",
"icons/Icon-512.png": "0954e39fbd7a02d585ef5d7abe209c9e",
"index.html": "8eeafd68d6c41827c7a471dccce40363",
"/": "8eeafd68d6c41827c7a471dccce40363",
"main.dart.js": "06cba74aa5a1516afc9935696b2093be",
"manifest.json": "843964a779812b75a51444ce95e281de"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
