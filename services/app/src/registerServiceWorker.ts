export default function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const reg = await navigator.serviceWorker.register(
          '/service-worker.js'
        );

        // tslint:disable-next-line: no-console
        console.log('ServiceWorker registered: ', reg);
      } catch (err) {
        // tslint:disable-next-line: no-console
        console.log('ServiceWorker registration failed: ', err);
      }
    });
  } else {
    // tslint:disable-next-line: no-console
    console.log('ServiceWorker NOT supported');
  }
}
