/**
 * 指定loader处理, 内联方式. 
 * https://www.webpackjs.com/concepts/loaders/#%E5%86%85%E8%81%94
 * 可以指定多个loader xxx-loader!xxx-loader!xxx-loader!
 * import 'css-loader!../css/style.css';
 * 以上不使用, 通过webpack中配置loader来处理.
 */
import '../css/style.css';
function component() {
    const el = document.createElement('div');
    el.innerHTML = ['HELLO', 'WORLD'].join(' ');
    el.className = "content";
    return el;
}

document.body.appendChild(component());