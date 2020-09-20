import { systemJSPrototype } from '../system-core.js';

systemJSPrototype._listeners = [];

/**
 * @param {{
 *  type: string
 *  module: object
 * }} listener 
 */
systemJSPrototype.subscribe = function (listener) {
  this._listeners.push(listener)
};

systemJSPrototype.unsubscribe = function (listener) {
  this._listeners.filter(currListener => {
    return currListener !== listener
  })
};
