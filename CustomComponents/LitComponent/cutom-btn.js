import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CustomBtn extends LitElement {
  static styles = css`button {
    background-color: transparent;
    border-radius: 10px;
    height: 50px;
    border: grey solid 1px;
    color: red;
    font-size: 30px;
    cursor:pointer
}`;

  static properties = { 
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'My First Web Component build with lit';
  }

  render() {
    return html`<button> ${this.name}!</button>`;
  }
}
customElements.define('my-custom-btn', CustomBtn );