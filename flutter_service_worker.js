'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "144f8f2eef1da7ec1a40347b663b3982",
"assets/assets/app_icon/dark_logo.svg": "fcafa79e752b0b6e18e231bced669177",
"assets/assets/app_icon/light_logo.svg": "b6ba6de05ea6b8a39aba445b29712232",
"assets/assets/app_icon/logo.png": "6b9c1bfcec3eb2f0663da221c522e6fc",
"assets/assets/app_icon/plain_dark_logo.svg": "11bd81d8f66457522ef71c1e947055c5",
"assets/assets/app_icon/plain_light_logo.svg": "2fc0cc24abda41d6577cb37c525c642e",
"assets/assets/app_icon/splash.png": "23e905a24bd4d935abb8f8c3a161b8a2",
"assets/assets/avatars/1.png": "ab15382fb93057b63714c24ebe732e2a",
"assets/assets/avatars/2.png": "f064b772595121d48434b3cc749edc25",
"assets/assets/avatars/3.png": "fd835a762a99c061c0c90a55b5088f59",
"assets/assets/avatars/4.png": "fcef33e462ae98e2c0db182a26584aeb",
"assets/assets/avatars/5.png": "21729b6ef4d1c298acfb80d473dab8aa",
"assets/assets/avatars/6.png": "42384b38af8a42bd87b1c16469f9346c",
"assets/assets/avatars/7.png": "35c5f90ef81fcf8384dccd964f976e23",
"assets/assets/avatars/8.png": "81f0b36acb87ef7f97d000fa5feda442",
"assets/assets/avatars/default_avatar.png": "ecbf110be66fc3cfb5701bf8c795d6a7",
"assets/assets/avatars/university-seal.jpg": "201dcf86048bbe6e3ab444d886b86198",
"assets/assets/colleges/ccs.gif": "4b695f72ac7737ce5b36508a0058dd02",
"assets/assets/colleges/coa.gif": "bee7317aee951c01e820ce021bdb9788",
"assets/assets/colleges/cob.gif": "a1cc9b7bc71717eeb3ac0b9827b15437",
"assets/assets/colleges/masteral.gif": "d579b83630fec99d0d17cace870d5db3",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/gallery/avr.jpg": "ef65b0ab17a2e1fa7e2fde865875fd03",
"assets/assets/gallery/comlab.jpg": "7cd0d23e02bae255e24b7ce82110947e",
"assets/assets/gallery/facade.jpg": "c960c35b60f68d209613a36a6c095b93",
"assets/assets/gallery/functionhall.jpg": "37088bac7f3c0b0870dbc1b83f106a94",
"assets/assets/gallery/library.jpg": "7120de732dca65229e89a50bab01cbf0",
"assets/assets/gifs/dismiss_report.gif": "bc8d455c7806ff729097361be54d71ff",
"assets/assets/gifs/email_sent.gif": "d968b5a29e2ab2c8d96719a94785585e",
"assets/assets/gifs/empty_data.gif": "7d62f20a9385c225460393cb4a9ad46f",
"assets/assets/gifs/exsisting_account_found.gif": "797e113ebaa1b26b89813f5bc2b62a6b",
"assets/assets/gifs/hi_there.gif": "66a7bd4d30922837bccd73ed685fd601",
"assets/assets/gifs/image_loading.gif": "ef45ea0b86ac1ec7d46ff5cca044aa60",
"assets/assets/gifs/incorrect_password.gif": "6def233b6051cc907346fc9c3db2027a",
"assets/assets/gifs/invalid_account_type.gif": "de6214ba95493b5bec1ae1c3ced99e2a",
"assets/assets/gifs/pencil_draw_erase.gif": "d57a3702ebbd76e88b0199131f9a1b77",
"assets/assets/gifs/question_mark.gif": "8891720be1dbf9f4168075a15ac16c99",
"assets/assets/gifs/something_went_wrong.gif": "b3ece14fd28614985f62025d8b8b4e45",
"assets/assets/gifs/ursb.gif": "babb47f40a39fa0305a18a15dd51d13f",
"assets/assets/gifs/user_not_found.gif": "62aa29aea6f27d70fc9f4804746a9fa4",
"assets/assets/gifs/warning.gif": "45aa2f4d76bff5158e256595cc016c11",
"assets/assets/logo/ccs.png": "5ea689fb0c765ff9dce97fb335347851",
"assets/assets/logo/coa.png": "b44f3fd9ea7785fbaef5786b2f475403",
"assets/assets/logo/cob.png": "e98f22e0860c24fc78c326816f20c505",
"assets/assets/logo/masteral.png": "f77d07757b685a428e80788d7c9af00a",
"assets/assets/vectors/forgot_password.png": "f0d98decb2affb833c6578f535150536",
"assets/FontManifest.json": "eb63c31e04fff877e5d76bd66c0a3d3c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a98b9deeaa9e6c1f7754908d74fd416d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "bb68121ba46a4e02514da7af89754eae",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce6a2e305696db8b1aa6185bf8bb2d21",
"/": "ce6a2e305696db8b1aa6185bf8bb2d21",
"main.dart.js": "af60ee4f609f5a573a8c48cf2cea47f3",
"manifest.json": "15d52c3d74577b2a504d6233b5799c76",
"splash/img/dark-1x.png": "fdb426023164760a443f83f92077b299",
"splash/img/dark-2x.png": "8e5c0e5afb610f3791a4bc815fd4f5a7",
"splash/img/dark-3x.png": "294d2ffb28ff1b8ab19c73c2e5899151",
"splash/img/dark-4x.png": "fc0674e3ea0a675a79e3a8027d544d39",
"splash/img/light-1x.png": "fdb426023164760a443f83f92077b299",
"splash/img/light-2x.png": "8e5c0e5afb610f3791a4bc815fd4f5a7",
"splash/img/light-3x.png": "294d2ffb28ff1b8ab19c73c2e5899151",
"splash/img/light-4x.png": "fc0674e3ea0a675a79e3a8027d544d39",
"splash/splash.js": "78dafc3887b40fdb73d73768e20675b2",
"splash/style.css": "5101c56623c699a58682017b764534bc",
"version.json": "252744baf7b0462a993bb27ddc1e38b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
