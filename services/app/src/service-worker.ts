export default null
declare const workbox: typeof import('workbox-sw')
declare var self: ServiceWorkerGlobalScope & {
  __precacheManifest: (
    | string
    | {
        url: string
        revision: string
      })[]
}

// tslint:disable-next-line: no-console
console.log('Hello, from service-worker')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox'
  const options = {
    body: event.data.text(),
  }

  // tslint:disable-next-line: no-console
  console.log('hello, from push notification')

  event.waitUntil(self.registration.showNotification(title, options))
})

workbox.precaching.precacheAndRoute(self.__precacheManifest)
