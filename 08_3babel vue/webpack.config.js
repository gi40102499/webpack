const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 要安装 vue-loader@15
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
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
        // 排除文件 不适用babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 解析.vue文件中less
      {
        test: /\.less/,
        use: [
          "style-loader",
          // 每次向上
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // inject: "body",
      template: "./src/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
