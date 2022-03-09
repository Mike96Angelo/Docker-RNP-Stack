export default null;
declare const workbox: typeof import('workbox-sw');
declare let self: ServiceWorkerGlobalScope;

// tslint:disable-next-line: no-console
console.log('Hello, from service-worker');

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text(),
//   }

//   // tslint:disable-next-line: no-console
//   console.log('hello, from push notification')

//   event.waitUntil(self.registration.showNotification(title, options))
// })
