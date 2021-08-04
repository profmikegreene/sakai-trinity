import { css } from 'https://unpkg.com/lit-element?module';
import { LionPagination } from 'https://unpkg.com/@lion/pagination@0.5.0/src/LionPagination.js?module';

export class SakaiPagination extends LionPagination {
  static get styles() {
    return [
      super.styles,
      css`
        button,
        input[type='button'] {
          display: inline-block;
          margin: 0;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fefefe;
          font-size: 1em;
          font-weight: normal;
          line-height: 16px;
          color: #212121;
          text-decoration: none;
          text-transform: none;
          cursor: pointer;
          -moz-appearance: none;
          -webkit-appearance: none;
        }
        ul {
            margin: 0;
        }
        li:first-of-type button {
          background-image: url('/sakai-trinity/icons/chevron-back-outline.svg');
        }
        li:last-of-type button {
          background-image: url('/sakai-trinity/icons/chevron-forward-outline.svg');
        }
        li:first-of-type button,
        li:last-of-type button {
          color: rgba(0, 0, 0, 0);
          background-repeat: no-repeat;
          background-position: center;
          background-size: auto 75%;
        }
      `,
    ];
  }
}
customElements.define('sakai-pagination', SakaiPagination);
