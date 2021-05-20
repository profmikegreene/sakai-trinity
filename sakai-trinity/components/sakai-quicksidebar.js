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
    return css`
      :host {
        display: none;
      }
      :host([open]) {
        display: flex;
        flex-direction: column;
      }
      .sakai-quickSideBar ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 4px 0 0;
      }
      #userNav {
        position: fixed;
        flex-direction: column;
      }
      .sakai-quickSideBar li {
        list-style: none;
      }
      .sakai-quickIt {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin: 4px;
        padding: 4px;
        border: 2px solid #ddd;
        background-color: #eee;
        overflow: hidden;
        font-size: 0;
      }
      .sakai-sideWidget {
        display: none;
      }
      .isExpanded .sakai-sideWidget {
        display: block;
        padding-left: 50px;
      }
      ion-icon {
        color: #222;
      }
    `;
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
      <div id="sakai-quickSideBar" class="sakai-quickSideBar">
        <ul id="widgets">
          <sakai-card>
            <sakai-widget-user></sakai-widget-user>
          </sakai-card>
          <sakai-card>
            <img src="../images/widget-tasks.png" />
          </sakai-card>
          <sakai-card>
            <img src="../images/widget-announcements.png" />
          </sakai-card>
          <sakai-card>
            <img src="../images/widget-calendar.png" />
          </sakai-card>
          <sakai-card>
            <img src="../images/widget-grades.png" />
          </sakai-card>
        </ul>
      </div>
    `;
  }
}

customElements.define('sakai-quick-sidebar', SakaiQuickSidebar);
