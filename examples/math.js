System.register(['add'], function (_export, _context) {

  let addModule

  return {
    setters: [(s) => {
      addModule = s
    }],
    execute: function () {
      _export("add", addModule.add);
    },
  };
});
