module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        /**
         * false 不适用任何的polyfill相关代码
         *
         * *** usage 代码中需要那么引入那些. 但可能会出现问题. 第三方库已经使用, 打包会有冲突.
         * 在webpack.config.js排除 exclude: /node_modules/ 即可
         * 默认使用core.js 2版本, 打包时会报错
         *
         * entry 默认不会生效. 在入口ma4in.js文件中, 引入 core-js/stable(标准) 'regenerator-runtime/runtime'(生成器) https://github.com/zloirock/core-js 文档中有说明
         * 但是官网中写到 import "@babel/polyfill" 即可
         * 这种生成的包很大, 根据目标浏览器引入所有的polyfill
         */
        useBuiltIns: "usage",
        corejs: 3, // 使用3版本
      },
    ],
    ["@babel/preset-typescript"],
  ],
  // plugins: [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       corejs: 3, // 还需要安装 @babel/runtime-corejs3 2就安装2版本, 否则报错 . 默认2版本
  //     },
  //   ],
  // ],
};
