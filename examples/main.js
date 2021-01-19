// 支持直接 import url
// System.import("./examples/add.js").then((module) => {
//   const result = module.add(1, 1);
//   console.log("result", result);
// });

const loadMath = () => {
  const r = System.resolve('math')
  console.log(r)

  System.import("math").then((module) => {
    const result = module.add(1, 1)
    console.log("add result", result)

    // test global
    const result2 = Add.add(1, 2)
    console.log('global add', result2)
  });
}

const btn = document.querySelector('.js-load-math')
btn.addEventListener('click', loadMath)

const loadMath2 = () => {
  System.extendImportMap({
    imports: {
      math: 'http://localhost:5002/examples/math.js',
    }
  })

  System.import("math").then((module) => {
    const result = module.add(1, 1)
    console.log("add result", result)
  });
}

const btn2 = document.querySelector('.js-load-math2')
btn2.addEventListener('click', loadMath2)

const loadLog = () => {
  System.extendImportMap({
    imports: {
      log: 'http://localhost:5000/examples/log.js',
    }
  })

  System.import("log").then((module) => {
    module.log('log loaded')
  });
}

const btn3 = document.querySelector('.js-load-log')
btn3.addEventListener('click', loadLog)
