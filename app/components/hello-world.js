import {LitElement, html} from 'lit-element';

class HelloWorld extends LitElement {
  render() {
    return html`
      <h1>Hello World from MyElement!</h1>
    `;
  }
}

customElements.define('hello-world', HelloWorld);