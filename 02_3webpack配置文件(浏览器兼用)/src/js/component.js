import '../css/style.css';
import '../css/component.less';
function component() {
    const el = document.createElement('div');
    el.innerHTML = ['HELLO', 'WORLD'].join(' ');
    el.className = "content";
    return el;
}

document.body.appendChild(component());