self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("static").then(function(cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/src/css/style.css",
        "/src/js/popper.min.js",
        "/img/evan-optimized.png",
        "/img/sushi-optimized.png",
        "/img/got-optimized.png",
        "/img/flashcard-optimized.png",
        "/img/invitation-optimized.png",
        "/img/weather.png",
        "/img/github_battle.png",
        "/img/react-cat.png",
        "/img/profile.jpeg",
        "/img/converter.png",
        "/img/react.svg",
        "/img/redux.svg",
        "/img/present-min.png",
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css",
        "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
      ]);
    })
  );
});
self.addEventListener("activate", function(event) {
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
