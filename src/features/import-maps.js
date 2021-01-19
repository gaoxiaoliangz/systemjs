/*
 * SystemJS browser attachments for script and import map processing
 */
import { baseUrl, resolveAndComposeImportMap, hasDocument, resolveUrl } from '../common.js';
import { systemJSPrototype } from '../system-core.js';
import { errMsg } from '../err-msg.js';

var importMapPromise = Promise.resolve();
export var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };

// Scripts are processed immediately, on the first System.import, and on DOMReady.
// Import map scripts are processed only once (by being marked) and in order for each phase.
// This is to avoid using DOM mutation observers in core, although that would be an alternative.
var processFirst = hasDocument;
systemJSPrototype.prepareImport = function (doProcessScripts) {
  if (processFirst || doProcessScripts) {
    processScripts();
    processFirst = false;
  }
  return importMapPromise;
};
if (hasDocument) {
  processScripts();
  window.addEventListener('DOMContentLoaded', processScripts);
}

function processScripts () {
  [].forEach.call(document.querySelectorAll('script'), function (script) {
    if (script.sp) // sp marker = systemjs processed
      return;
    // TODO: deprecate systemjs-module in next major now that we have auto import
    if (script.type === 'systemjs-module') {
      script.sp = true;
      if (!script.src)
        return;
      System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl));
    }
    else if (script.type === 'systemjs-importmap') {
      script.sp = true;
      var fetchPromise = script.src ? fetch(script.src).then(function (res) {
        return res.text();
      }) : script.innerHTML;
      importMapPromise = importMapPromise.then(function () {
        return fetchPromise;
      }).then(function (text) {
        extendImportMap(importMap, text, script.src || baseUrl);
      });
    }
  });
}

function extendImportMap (importMap, newMapText, newMapUrl) {
  try {
    var newMap = JSON.parse(newMapText);
  } catch (err) {
    throw Error(process.env.SYSTEM_PRODUCTION ? errMsg(1) : errMsg(1, "systemjs-importmap contains invalid JSON"));
  }
  resolveAndComposeImportMap(newMap, newMapUrl, importMap);
}

// system.js 使用解析过的 url 作为缓存的 key, 也就是说 extend 之后，如果是同样的 key 不同的 url，把之前的 imports 
// 覆盖之后还是会造成重新加载，因为 url 不一样了，现在默认阻止这种覆盖行为
systemJSPrototype.extendImportMap = function (newMap, override) { 
  if (!override) {
    var newImports = {};
    Object.keys(newMap.imports).forEach(key => {
      if (!importMap.imports[key]) {
        newImports[key] = newMap.imports[key];
      }
    })
    newMap = Object.assign({}, newMap, {
      imports: newImports,
    })
  }

  resolveAndComposeImportMap(newMap, baseUrl, importMap);
}
