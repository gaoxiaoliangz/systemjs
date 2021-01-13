import { systemJSPrototype } from '../system-core.js';

systemJSPrototype.registerGlobal = function (importKey, globalName) {
  if (typeof System.subscribe === 'undefined') {
    console.error('System.subscribe is not available, failed to expose ${globalName} to global');
    return;
  }

  var listener = function (e) {
    var id = System.resolve(importKey);

    if (e.type === 'load' && e.id === id) {
      System.unsubscribe(listener);
      if (!window[globalName]) {
        window[globalName] = e.load.n;
      } else {
        console.warn(`window.${globalName} already exists, registration skipped`);
      }
    }
  };

  System.subscribe(listener, true);
}
