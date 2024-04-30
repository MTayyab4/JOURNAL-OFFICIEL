// service-worker.js

// Define a unique cache name
var CACHE_NAME = 'my-site-cache-v1';

// List of URLs to cache
var urlsToCache = [
  '/',
  '/style.css',
  '/script.js',
  '/audio',
  '/photos'
];

// Install event listener
self.addEventListener('install', function(event) {
  // Perform installation steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event listener
self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activated');
  // Perform activation steps, such as cache cleanup
});
