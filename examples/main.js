// 支持直接 import url
// System.import("./examples/add.js").then((module) => {
//   const result = module.add(1, 1);
//   console.log("result", result);
// });

const loadMath = () => {
  const r = System.resolve('math')
  console.log(r)

  System.import("math").then((module) => {
    const result = module.add(1, 1);
    console.log("add result", result);
  });
}

const btn = document.querySelector('.js-load-math')
btn.addEventListener('click', e => {
  loadMath()
})
