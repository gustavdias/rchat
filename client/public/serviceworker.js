//Cache stands for the storage of the browser.
const CACHE_NAME = "version-1";
//what urls you want in cache / offline.html represents the page you want ot show when user don't have internet
const urlsToCache = [ 'index.html', 'offline.html' ];
//this represents the serviceworker, since you are in its file (global)
const self = this;

// Install SW
//self means the service worker itself
self.addEventListener('install', (event) => {
    event.waitUntil(//wait until you open the cache
        caches.open(CACHE_NAME)//where you open the cache
            .then((cache) => {
                console.log('Opened cache!!');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) //you want to get new data
                    .catch(() => caches.match('offline.html')) //if the app can't get new data/it is offline, you return the offline.html
            })
    )
});
//for you not to have many cache versions, in activation, all the previously caches are removed and just the new one is kept. You make a list for that (array)
// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    //push all the things you want to keep
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                //if the cacheWhitelist doesn't include cacheName, it will be deleted
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});