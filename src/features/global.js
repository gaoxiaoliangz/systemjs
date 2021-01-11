import { systemJSPrototype } from '../system-core.js';

// exec 事件一定在 prepareImport 之后发生，所以即便 prepareImport 是异步的，subscribe 也不会错过自己 package 的 exec 事件
systemJSPrototype.registerGlobal = function (importKey, globalName) {
  if (typeof System.subscribe === 'undefined') {
    console.error('System.subscribe is not available, failed to expose ${globalName} to global');
    return;
  }

  var id;

  var listener = function (e) {
    if (e.type === 'load' && e.id === id) {
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
    System.subscribe(listener, true);
  });
}
