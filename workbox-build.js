const swBuild = require('workbox-build');

swBuild.generateSW({
        navigateFallback: 'index.html',
        globDirectory: './dist',
        globPatterns: [
            'index.html',
            '**.js',
            '**.css',
            '*.png',
            '*.ico'
        ],
        swDest: 'dist/sw.js',
    }).then(() => console.log('Service Worker generated'))
    .catch(err => console.error(err, 'Service Worker failed to generate'));