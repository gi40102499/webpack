const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/main.ts",
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
        // 排除文件 不适用babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: {
          // 依赖于typescript, 会自动安装依赖到局部中
          // loader: "ts-loader",
          loader: "babel-loader",
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
