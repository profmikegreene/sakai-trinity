import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
// import 'https://unpkg.com/@github/include-fragment-element?module';
import './sakai-card.js';
import './sakai-widget-user.js';

export class SakaiQuickSidebar extends LitElement {
  constructor() {
    super();
    this.open = false;
  }
  static get properties() {
    return {
      open: { type: Boolean },
    };
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
    this.toggleOpen();
  }
  toggleOpen() {
    let pageStyles = getComputedStyle(document.documentElement);
    if (this.open) {
      document.documentElement.style.setProperty(
        '--quickSideBarWidth',
        pageStyles.getPropertyValue('--quickSideBarOpenWidth')
      );
    } else if (!this.open) {
      document.documentElement.style.setProperty(
        '--quickSideBarWidth',
        pageStyles.getPropertyValue('--quickSideBarClosedWidth')
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.toggleOpen();
  }

  static get styles() {
    return css``;
  }
  // _onClick() {
  //   const portalWrapper = document.querySelector('.sakai-portalWrapper');
  //   portalWrapper.classList.toggle('quickSideBarExpanded');
  //   this.shadowRoot
  //     .getElementById('sakai-quickSideBar')
  //     .classList.toggle('isExpanded');
  // }
  render() {
    return html`
      <link
        href="/sakai-trinity/components/sakai-quicksidebar.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="sakai-quickSideBar" class="sakai-quickSideBar">
        <ul id="widgets">
          <sakai-card>
            <sakai-widget-user></sakai-widget-user>
          </sakai-card>
          <sakai-card>
            <img src="/sakai-trinity/images/widget-tasks.png" />
          </sakai-card>
          <sakai-card>
            <img src="/sakai-trinity/images/widget-announcements.png" />
          </sakai-card>
          <sakai-card>
            <img src="/sakai-trinity/images/widget-calendar.png" />
          </sakai-card>
          <sakai-card>
            <img src="/sakai-trinity/images/widget-grades.png" />
          </sakai-card>
        </ul>
      </div>
    `;
  }
}

customElements.define('sakai-quick-sidebar', SakaiQuickSidebar);
