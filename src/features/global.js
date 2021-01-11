import { systemJSPrototype } from '../system-core.js';

systemJSPrototype.registerGlobal = function (importKey, globalName) {
  if (typeof System.subscribe === 'undefined') {
    console.error('System.subscribe is not available, failed to expose ${globalName} to global');
    return;
  }

  var id;

  var listener = function (e) {
    if (e.type === 'exec' && e.id === id) {
      System.unsubscribe(listener);
      if (!window[globalName]) {
        window[globalName] = e.load.n;
      } else {
        console.warn(`window.${globalName} already exists, registration skipped`);
      }
    }
  };

  System.prepareImport().then(function () {
    id = System.resolve(importKey);
    System.subscribe(listener);
  });
}
