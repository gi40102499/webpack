const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const { DefinePlugin } = require("webpack");

module.exports = {
  // development 或 production
  mode: "development",
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    /**
     * 这是针对所有assetModuleType的模块的配置，
     * 相关都会打包到这个位置.
     * 这里ext会带点
     */
    // assetModuleFilename: "img/[name].[hash:6][ext]",
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
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      /**
       * 使用这种方法时
       * require("../img/test.jpg")不需要加.default
       */
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        /**
         * 1.file-loader效果
         * type: "asset/resource",
         * 只针对匹配的文件进行处理, 存放自定路径
         * generator: {
         *  filename: "img/[name].[hash:6][ext]",
         * },
         */

        /**
         * 2.url-loader效果
         * 需要删除generator节点
         * type:"asset/inline",
         */

        /**
         * 3.自动选择
         */
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            // 小于这个值会被转换成base64
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff2?|eot)$/,
        /**
         * 视频中需要写这个, 否则报错. 但是当前测试不写一样编译成功
         * type: "asset/resource",
         */
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      title: "测试webpack标题",
    }),
    new DefinePlugin({
      // 必须这样定义 或者 '"./"', 否则 BASE_URL = ./
      BASE_URL: JSON.stringify("./"),
    }),
  ],
};
