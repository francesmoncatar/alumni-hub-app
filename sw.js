const cacheName = 'doc-portal-v1';
const assets = [
  './',
  './index1.html',
  './index3.html',
  './index4.html',
  './style1.css',
  './style2.css',
  './js/angular.min.js',
  './js/app1.js',
  './js/app3.js',
  './js/app4.js'
];

// Install process: Saves files into the browser's memory
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching shell assets');
      cache.addAll(assets);
    })
  );
});

// Fetch process: Serves files from memory when offline
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});