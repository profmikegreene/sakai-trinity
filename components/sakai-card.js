import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiCard extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      /**
       * URI of the html fragment.
       */
      source: { type: String },
    };
  }
  static get styles() {
    return css``;
  }
  _onClick() {}
  render() {
    return html`
      <link
        href="/sakai-trinity/components/sakai-card.css"
        rel="stylesheet"
        type="text/css"
      />
      <slot></slot>
    `;
  }
}

customElements.define('sakai-card', SakaiCard);
