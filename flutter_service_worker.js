'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "8ffda67f22ad69dca4520ab22533932b",
"icons/Icon-192.png": "0ee385ccf148b98128286495dcf39afa",
".well-known/assetlinks.json": "30798028366c31b2c33b61871a546905",
".well-known/apple-app-site-association": "a3d233e18eb02da3deb2551de0b36e2f",
"manifest.json": "ced585883bfd7f4138dda43087062d75",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "271374bcda14949195852ec98a46bf92",
"version.json": "5bb45787af07be58eb4742b714a293d0",
"favicon.png": "d53dee62454ef86a7bc710471f4bcefd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_js/assets/js/fetch.js": "277e0c5ec36810cbe57371a4b7e26be0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "ea68ff2521ee5819131cb0bc9f3fd42c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1128c30e4f318c6edc3460ea27d4be59",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d5439237c7d5c6c6defed3f01a00a533",
"assets/NOTICES": "9b8e319916aee0e9db623fea5bd760ad",
"assets/CONTRIBUTORS": "96cc5b51c397f5c64744ce524f4525d8",
"assets/AssetManifest.bin": "6ef34d539e053888bf6120d5975623f1",
"assets/README.md": "e5691d5dd4835fba2b839d5a129fa5e9",
"assets/FontManifest.json": "49eb69acec238ac9d6955f4699859af0",
"assets/LICENSE": "4ae09d45eac4aa08d013b5f2e01c67f6",
"assets/AssetManifest.bin.json": "80ea1567b559730d1683058de25f486e",
"assets/res/license/CC-BY-NC-SA-4.0.txt": "43d68faec86e9d4790fa3ef9f82e3b38",
"assets/res/license/CC-BY-SA-3.0.txt": "642a30782a0a7f728a7dff5031bdaf8e",
"assets/res/license/ODC-BY%25201.0.txt": "0dc7b8c342cc727d7f2c254fe4ba43bd",
"assets/res/img/load_icon_A04.png": "e13dc147b52744697394ed5a59c3016c",
"assets/res/img/md/kofi2.webp": "2eb9b3da9be482518a843e53af092d4d",
"assets/res/img/md/alipay.webp": "2cc8f529f352faeb0f15de6ed2a58cf0",
"assets/res/img/md/wechat_pay.webp": "c93f4542fd893ee880477e6431c8eb15",
"assets/res/img/md/bilicharge.webp": "91c3bacf32f16943e797c228de63212b",
"assets/res/img/gudako.png": "20212c1efb68a57bfc19db2765fb9c54",
"assets/res/img/chaldea.png": "c909b5045baf583b7a553bd88442e557",
"assets/res/img/error.png": "c0e1e00f93c7edb88f2ad71e3a8fc17d",
"assets/res/img/load_icon_A02.png": "ed5c7cf496f949ef7f4f49aa117a1c22",
"assets/res/img/launcher_icon/app_icon.png": "9cec1067c450f2ea22f8d165e6d558b1",
"assets/res/img/launcher_icon/app_icon_logo.png": "e1ff297e56154dd7c65525e3d540aa61",
"assets/res/img/launcher_icon/app_icon.ico": "14f67bd67853c9051553297c1a2a46f5",
"assets/res/img/launcher_icon/app_icon_circle.png": "7bac634cb8b88cb25db0ecbe2b62fb9d",
"assets/res/img/launcher_icon/app_icon_rounded.png": "d791845c2ea82f7df9c0ca04f75b88a1",
"assets/res/img/load_icon_A01.png": "7b68939f92d4d4f3aeb7c46fca0528f4",
"assets/res/img/load_icon_A03.png": "5f566462b3208913533c2b712777ebcb",
"assets/res/assets/card_txt_quick.png": "19a19760f91987ce8545bb737e9955b4",
"assets/res/assets/card_txt_arts.png": "f993eee0e9240e8d65d96d874c2a01a6",
"assets/res/assets/card_icon_buster.png": "646474f238733061aba0867ba326deee",
"assets/res/assets/img_bond_category.png": "ce2e2c3355ae231260a7690f9052e9eb",
"assets/res/assets/card_bg_quick.png": "801f0834593438c0f9bbe6a6217c657b",
"assets/res/assets/card_icon_arts.png": "c65f378e9e87f0891420c539b70e054c",
"assets/res/assets/card_icon_quick.png": "2a2418c7001e4f8fe35827f019df41e4",
"assets/res/assets/card_bg_arts.png": "62b7adc49dd7ad5a8b68a0e2687a6072",
"assets/res/assets/card_txt_extra.png": "6991ae88fa49ffe5c4ce9c4214faa768",
"assets/res/assets/card_bg_buster.png": "c65324c8803d5b0e994da561b550c2ad",
"assets/res/assets/card_txt_buster.png": "24824abcb8eaaba88fe45e7db6217ffd",
"assets/res/fonts/RobotoMono-Italic-VariableFont_wght.ttf": "f7f9444826ffa286aa3569c60c75995b",
"assets/res/fonts/RobotoMono-VariableFont_wght.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/res/js/glpk_solver.js": "ed5cbb5ce3eb97c58217b31f1d3c3b78",
"assets/res/js/solver.js": "277b33db3330c3dc4c2dbad6ffa50bfe",
"assets/res/js/glpk.min.js": "2c37152793f7c4129cebb8d7360a866d",
"assets/fonts/MaterialIcons-Regular.otf": "f6ad9965692998b94d6cecbc89a37dbb",
"assets/AssetManifest.json": "c46b5028f469b4e5b890a1a15378b17c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/CHANGELOG.md": "3e0102ccdc47072557b49e4bb2150bb2",
"index.html": "528bcd37640464c6adc652f56597883c",
"/": "528bcd37640464c6adc652f56597883c",
"_headers": "40acea13a1b934b8cce6cfae80da1365",
"css/style.css": "78315338bb791c8ca7c4424a8400a598",
"ads.txt": "f5522a08a9ca74b24a2ea4368a14ce43",
"main.dart.js": "e49a7377af46e79ca3929ae46590e0c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
