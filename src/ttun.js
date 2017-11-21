import Mark from 'mark.js';
import css from './ttun.css';

console.log(css.toString());

export default class Ttun {
  constructor() {
    const styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.appendChild(document.createTextNode(css.toString()));
    document.head.appendChild(styleNode);
    const instance = new Mark(document.querySelector('body'));
    instance.mark('m', {
      element: 'span',
      className: 'ttun',
      iframes: true
    });
  }
}
