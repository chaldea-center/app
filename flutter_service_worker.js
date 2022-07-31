'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.html": "b3e9d54dbf58331b314b920924692e05",
"/": "b3e9d54dbf58331b314b920924692e05",
"favicon.png": "d53dee62454ef86a7bc710471f4bcefd",
"main.dart.f65bf238.js": "f65bf23802fff9ba89e504f56401ad56",
"manifest.json": "bcc66a44f61f554d689f214489648da0",
"version.json": "e1cd958f2ee940dcb8e60883422071a6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-512.png": "8ffda67f22ad69dca4520ab22533932b",
"icons/Icon-192.png": "0ee385ccf148b98128286495dcf39afa",
"assets/CHANGELOG.md": "4dd98a53164dd646d12a1a34b20ac381",
"assets/res/js/solver.js": "277b33db3330c3dc4c2dbad6ffa50bfe",
"assets/res/js/glpk.min.js": "2c37152793f7c4129cebb8d7360a866d",
"assets/res/js/glpk_solver.js": "ed5cbb5ce3eb97c58217b31f1d3c3b78",
"assets/res/img/error.png": "c0e1e00f93c7edb88f2ad71e3a8fc17d",
"assets/res/img/chaldea.png": "c909b5045baf583b7a553bd88442e557",
"assets/res/img/launcher_icon/app_icon_logo.png": "e1ff297e56154dd7c65525e3d540aa61",
"assets/res/img/gudako.png": "20212c1efb68a57bfc19db2765fb9c54",
"assets/res/img/md/alipay.webp": "2cc8f529f352faeb0f15de6ed2a58cf0",
"assets/res/img/md/bilicharge.webp": "91c3bacf32f16943e797c228de63212b",
"assets/res/img/md/kofi2.webp": "2eb9b3da9be482518a843e53af092d4d",
"assets/res/img/md/wechat_pay.webp": "c93f4542fd893ee880477e6431c8eb15",
"assets/res/fonts/RobotoMono-Italic-VariableFont_wght.ttf": "f7f9444826ffa286aa3569c60c75995b",
"assets/res/fonts/RobotoMono-VariableFont_wght.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/res/assets/card_txt_quick.png": "19a19760f91987ce8545bb737e9955b4",
"assets/res/assets/card_icon_arts.png": "c65f378e9e87f0891420c539b70e054c",
"assets/res/assets/card_icon_quick.png": "2a2418c7001e4f8fe35827f019df41e4",
"assets/res/assets/card_txt_buster.png": "24824abcb8eaaba88fe45e7db6217ffd",
"assets/res/assets/card_bg_arts.png": "62b7adc49dd7ad5a8b68a0e2687a6072",
"assets/res/assets/card_bg_buster.png": "c65324c8803d5b0e994da561b550c2ad",
"assets/res/assets/card_icon_buster.png": "646474f238733061aba0867ba326deee",
"assets/res/assets/card_txt_extra.png": "6991ae88fa49ffe5c4ce9c4214faa768",
"assets/res/assets/card_bg_quick.png": "801f0834593438c0f9bbe6a6217c657b",
"assets/res/assets/img_bond_category.png": "ce2e2c3355ae231260a7690f9052e9eb",
"assets/res/assets/card_txt_arts.png": "f993eee0e9240e8d65d96d874c2a01a6",
"assets/FontManifest.json": "49eb69acec238ac9d6955f4699859af0",
"assets/CONTRIBUTORS": "cad86b4a05dec80f9001feff9c380ae4",
"assets/LICENSE": "4ae09d45eac4aa08d013b5f2e01c67f6",
"assets/NOTICES": "9fe930c24d287dcdce2d55cde7a1da9f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/doc/license/CC-BY-NC-SA-4.0.txt": "43d68faec86e9d4790fa3ef9f82e3b38",
"assets/doc/license/CC-BY-SA-3.0.txt": "642a30782a0a7f728a7dff5031bdaf8e",
"assets/doc/license/ODC-BY%25201.0.txt": "0dc7b8c342cc727d7f2c254fe4ba43bd",
"assets/doc/help/free_quest_planning.md": "aeb40bbef8a50a5eda57fa65ac588d49",
"assets/doc/help/en/free_quest_planning.md": "7f618427fad2c8f9ae6f022dc3616586",
"assets/doc/help/en/import_https_response.md": "ac41a6746f5cc7f7e3a00c76b86e6b5c",
"assets/doc/help/jp/free_quest_planning.md": "548abfd8dc119f21bebc0cc506181d2c",
"assets/doc/help/import_https_response.md": "ad1b124f2e62c480de63d200d7526ab8",
"assets/AssetManifest.json": "dd4351247fb56bc271b3d521f39ff706",
"assets/README.md": "1011de9a698cf8aac0c8b7fb81e4e6ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.f65bf238.js",
"index.html",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
