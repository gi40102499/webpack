const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // 入口文件
  entry: "./src/main.js",
  devtool: "source-map",
  // 出口文件
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          /**
           * 如果使用预设, 那么会在当前命令行执行的目录下找到 .browserslistrc 文件,
           * 然后到相关网站[https://autoprefixer.github.io/]查看那些需要转换为适配
           * 当前.browserslistrc适配的浏览器, 支持箭头函数和const. 所以基本不转换.
           * 因为没有ie浏览器在这个列表中.
           */
          loader: "babel-loader",
          options: {
            // 1.预设通过.browserslistrc
            // presets: ["@babel/preset-env"],
            // 2.传入参数, 优先级高于上面的配置. 不建议这样使用. 避免css, js 导致转换时不统一
            presets: [["@babel/preset-env", { target: ["chrome 88"] }]],

            // plugins: [
            //   "@babel/plugin-transform-arrow-functions",
            //   "@babel/plugin-transform-block-scoping",
            // ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "测试webpack标题",
    }),
  ],
};
