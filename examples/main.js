System.import("fn-add").then((module) => {
  const result = module.add(1, 1);
  console.log("add result", result);
});

System.import("fn-subtract").then((module) => {
  const result = module.subtract(2, 1);
  console.log("subtract result", result);
});

// 支持直接 import url
// System.import("./examples/add.js").then((module) => {
//   const result = module.add(1, 1);
//   console.log("result", result);
// });
