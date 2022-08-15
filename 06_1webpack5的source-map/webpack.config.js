const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // development 或 production(丑化混淆代码)(默认设置)
  mode: "production",
  // 入口文件
  entry: "./src/index.js",
  // entry: "./src/common_index.js",
  // 打包代码样式, mode: "development"默认eval
  /**
   * 一共可以设置26个值................
   * source-map
   * xxxx.js xxxx.js.map [浏览器]对应关系.定位源文件[浏览器自动加载] [浏览器设置]中可以打开或者关闭
   * webpack会在转换后的js对吼添加 //# sourceMappingURL=xxxx.js.map. 固定格式
   * 开发, 测试, 发布设置不同devtool
   */
  devtool: "source-map",
  // 出口文件
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "测试webpack标题",
    }),
  ],
};
