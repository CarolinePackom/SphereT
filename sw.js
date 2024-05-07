var CACHE_NAME = 'bao-cache-v7'

const offlineUrl  = 'offline/index.html'
// const brokenImage = 'offline/broken.png'
const CACHE_FILES = [
  offlineUrl
  // brokenImage
]

function isImage(fetchRequest) {
  return fetchRequest.method === "GET" && fetchRequest.destination === "image";
}

function isHTML(fetchRequest) {
  return fetchRequest.mode === 'navigate' || (fetchRequest.method === 'GET' && fetchRequest.headers.get('accept').includes('text/html'))
}


self.addEventListener('install', (e) => {
  self.skipWaiting() // Immediately install the new SW
  
  // Save in cache the offline page
  e.waitUntil(
    (async () => {
      // caches.open(CACHE_NAME).then(cache => cache.addAll([
      //   offlineUrl,
      //   brokenImage
      // ]))
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(CACHE_FILES)
    })()
  )

  // console.log(`${CACHE_NAME} Install`)
})

self.addEventListener('activate', (e) => {
  clients.claim(); // Allow the SW to immediately control the page

  // Delete other version of caches
  // (!=  current cache name)
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(CACHE_NAME)) {
            return caches.delete(key)
          }
        })
      )
    })()
  )

  // console.log(`${CACHE_NAME} Active`)
})

self.addEventListener('fetch', (e) => {
  const request = e.request;
  if (request.method !== 'GET') return
  
  // This service worker won't touch the admin area and preview pages
  if (
    request.url.match(/wp-admin/) ||
    request.url.match(/wp-login.php/) ||
    request.url.match(/gestion/) ||
    request.url.match(/preview=true/)
  ) {
    return
  }
  // console.log(`${CACHE_NAME} Fetching : ${e.request.url}, Mode : ${e.request.mode}`)

  // if ( isImage(e.request) ) {
  //   e.respondWith(fetch( e.request )
  //     .then((response) => {
  //         if (response.ok) return response

  //         // User is online, but response was not ok
  //         // Get broken image placeholder from cache
  //         return caches.match(brokenImage)
  //     })
  //     .catch(error => {
  //       // User is probably offline
  //       // Get broken image placeholder from cache
  //       return caches.match(brokenImage)
  //     })
  //   ) // end fetch
  // }
  // else if ( isHTML(e.request) ) {
  // if ( isHTML(e.request) ) {
  //   e.respondWith(fetch( e.request.url ).catch(error => {
  //     return caches.match(offlineUrl)
  //   }))
  // }
  return
})
