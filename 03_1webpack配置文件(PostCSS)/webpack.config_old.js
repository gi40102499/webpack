const path = require("path");
module.exports = {
  // development 或 production
  mode: "development",
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 配置loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              /**
               * 当css中有import的时候，再往上执行处理loader => postcss-loader. 填级那么往回执行几步
               */
              importLoaders: 1,
            },
          },
          /**
           * postcss-loader 可以单独抽离为 postcss.config.js 文件
           * 可以配置 postcss.config.js(固定写法) 文件中的 plugins 属性为当前项目需要的插件, 同下面配置
           * 抽离之后, 这里直接写postcss-loader就可以了
           * 方便多处调用
           */
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                /**
                 * 可以直接写字符串，也可以写函数导入
                 * "postcss-preset-env" === require("postcss-preset-env")
                 */
                plugins: [
                  /**
                 * require("autoprefixer")({
                  overrideBrowserslist: ["last 2 versions", "> 1%", "ios 7"],
                }) */
                  require("autoprefixer"),
                  /**
                   * 转成大部分浏览器可以识别的css 例如#12345688 转为 rgba
                   * 也可以把上面的删除了require("autoprefixer")
                   * 这个包涵
                   */
                  require("postcss-preset-env"),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
