System.register([], function (_export, _context) {
  return {
    execute: function () {
      _export("log", (...args) => console.log('LOG', ...args));
    },
  };
});
