importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "bc6b6916f3a50493a8f689d680981188"
  },
  {
    "url": "inline.461a40f69e4c03e03641.bundle.js",
    "revision": "2342e2c83613fbe268e882b18f6c1fd4"
  },
  {
    "url": "main.f93298ad68b74e9a6bab.bundle.js",
    "revision": "68431bc2df8a4ab50eb599a61ae03f0b"
  },
  {
    "url": "polyfills.9bf903b2d543e6cf07db.bundle.js",
    "revision": "a8f0bdb7341bcadf5f526fdaa2e18dfd"
  },
  {
    "url": "vendor.638013d49f2dd977d5ec.bundle.js",
    "revision": "dcab466dfbc2d9d777f2cdca6855eb68"
  },
  {
    "url": "styles.0190c6e3f9e473f6205c.bundle.css",
    "revision": "0190c6e3f9e473f6205c70f6c04c34f1"
  },
  {
    "url": "favicon-144.png",
    "revision": "723e001b556a64e4b8941a8aeff77233"
  },
  {
    "url": "favicon.png",
    "revision": "1c250566b3f94c90bc8068cda6d7484d"
  },
  {
    "url": "favicon.ico",
    "revision": "ccb6eaafe0244ba2a080e29f51a38ef9"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
