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
    // 多规章. 放置规则Rule对象
    rules: [
      {
        // 匹配资源后缀为.css的文件
        test: /\.css$/,
        /**
         * 1. UseEntry是一个对象, 可以指定多个loader
         * ==============完整写法==============
         * loader : 必须有, 对应一个字符串
         * options : 可选, 值时一个对象或者字符串, 值会被传入到loader中
         * query : 被options替换
         */
        /**
         * 2. 传递字符串
         * ==============简写==============
         * 例子: use : ['style-loader', 'css-loader']
         * 是UseEntry对象的简写方式
         */
        use: [
          // loader是从下往上, 从右到左执行执行的, 可以指定多个loader. 
          /**
           * npm install style-loader -D (-D === --save-dev)
           * 创建一个style标签, 并把css代码放入style标签中
           */
          "style-loader",
          /**
           * npm install css-loader -D (-D === --save-dev)
           * 单独配置可以加载成功, 但是没有作用到项目中
           * 只是解析
           */
          "css-loader",
        ],
        /**
         * 3. 删除use, 替换为loader
         * loader 是对以上两种方式的简写
         * ==============简写==============
         * 例子: loader : 'css-loader'
         * 是use的简写
         */
        // loader: "css-loader",
      },
    ],
  },
};
