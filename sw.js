self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static')
            .then(function(cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/src/css/style.css',
                    '/src/js/popper.min.js',
                    '/dist/images/evan-optimized.png',
                    '/dist/images/sushi-optimized.png',
                    '/dist/images/got-optimized.png',
                    '/dist/images/twitter-optimized.png',
                    '/dist/images/flashcard-optimized.png',
                    '/dist/images/invitation-optimized.png',
                    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
                    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'
                ])
            })
        )
})
self.addEventListener('activate', function(event) {
    return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            })
    );
});