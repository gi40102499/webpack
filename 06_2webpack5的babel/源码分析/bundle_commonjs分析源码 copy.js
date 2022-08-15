(function () {
  // webpackBootstrap
  // 模块路径作为key，模块作为value存储在一个对象中
  var __webpack_modules__ = {
    "./src/js/add.js": function (module) {
      function add(a, b) {
        return a + b;
      }
      function minus(a, b) {
        return a - b;
      }

      module.exports = {
        add,
        minus,
      };
    },
  };
  // The module cache
  // 做缓存
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    // 缓存加上模块
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = {};

  // 执行代码逻辑
  !(function () {
    const { add, minus } = __webpack_require__("./src/js/add.js");
    console.log(add(1, 2));
    console.log(minus(1, 2));
  })();
})();
