importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox load success`);

    /* recaching App Shell */
    workbox.precaching.precacheAndRoute([{
            url: '/',
            revision: '2'
        },
        {
            url: '/manifest.json',
            revision: '2'
        },
        {
            url: '/oursLogo.png',
            revision: '2'
        },
        {
            url: '/oursLogo-192.png',
            revision: '2'
        },
        {
            url: '/nav.html',
            revision: '2'
        },
        {
            url: '/index.html',
            revision: '2'
        },
        {
            url: '/pages/detailtim.html',
            revision: '2'
        },
        {
            url: '/pages/favorite.html',
            revision: '2'
        },
        {
            url: '/pages/home.html',
            revision: '2'
        },
        {
            url: '/pages/listteam.html',
            revision: '2'
        },
        {
            url: '/css/materialize.min.css',
            revision: '2'
        },
        {
            url: '/css/custom.css',
            revision: '2'
        },
        {
            url: '/js/materialize.min.js',
            revision: '2'
        },
        {
            url: '/js/viewresponse.js',
            revision: '2'
        },
        {
            url: '/js/indexDetail.js',
            revision: '2'
        },
        {
            url: '/js/index.js',
            revision: '2'
        },
        {
            url: '/js/api.js',
            revision: '2'
        },
        {
            url: '/js/db.js',
            revision: '2'
        },
        {
            url: '/js/idb.js',
            revision: '2'
        },
        {
            url: '/js/jquery.min.js',
            revision: '2'
        },
        {
            url: '/js/serviceworkerRegister.js',
            revision: '2'
        },
        {
            url: '/font/Merienda-Bold.ttf',
            revision: '2'
        },
    ], {
        ignoreUrlParametersMatching: [/.*/]
    });


    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
                }),
            ],
        }),
    );

    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate()
    );

    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'pages'
        })
    );

    // Caching Google Fonts
    workbox.routing.registerRoute(
        /.*(?:googleapis|gstatic)\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        })
    );

    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-assets',
        })
    );
} else {
    console.log(`Workbox load not success`);
}

self.addEventListener('push', function(event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    let options = {
        body: body,
        icon: '/oursLogo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    let url = 'https://irvandandung.github.io/';
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                let client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});