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
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
};
