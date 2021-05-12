import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiCard extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }
  _onClick() {
    
  }
  render() {
    return html`
      
    `;
  }
}

customElements.define('sakai-card', SakaiCard);