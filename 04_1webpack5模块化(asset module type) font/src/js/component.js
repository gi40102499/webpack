import "../css/style.css";
import "../css/postcsstest.css";
import "../css/component.less";
function component() {
  const el = document.createElement("div");
  el.innerHTML = ["HELLO", "WORLD"].join(" ");
  el.className = "content";
  return el;
}
document.body.appendChild(component());

function imgEl() {
  // 设置图片资源
  const img = new Image();
  img.src = require("../img/test.jpg");
  document.body.appendChild(img);
  // 设置背景图片
  const bg = document.createElement("div");
  bg.className = "bg";
  document.body.appendChild(bg);
}
function iconEl() {
  const iconEl = document.createElement("div");
  iconEl.className = "iconfont icon-ashbin";
  document.body.appendChild(iconEl);
}
imgEl();
iconEl()
