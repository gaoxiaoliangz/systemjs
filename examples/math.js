if (window.math) {
  throw new Error('math already exists')
}

System.register(['add'], function (_export, _context) {

  let addModule

  return {
    setters: [(s) => {
      addModule = s
    }],
    execute: function () {
      window.math = true;
      _export("add", addModule.add);
    },
  };
});
