import { systemJSPrototype } from '../system-core.js';

systemJSPrototype._listeners = [];
systemJSPrototype._event_buffer = [];

systemJSPrototype.notify = function (event) {
  this._event_buffer.push(event);

  if (Array.isArray(this._listeners)) {
    this._listeners.forEach(listener => {
      if (typeof listener === 'function') {
        listener(event);
      }
    })
  }
}

/**
 * @param {{
 *  type: 'import-resolved' | 'load'
 *  id: string
 *  module?: object
 *  parentUrl?: string
 *  load?: any
 * }} listener 
 */
systemJSPrototype.subscribe = function (listener, buffered) {
  if (buffered) {
    this._event_buffer.forEach(listener);
  }
  this._listeners.push(listener);
};

systemJSPrototype.unsubscribe = function (listener) {
  this._listeners.filter(currListener => {
    return currListener !== listener;
  })
};
