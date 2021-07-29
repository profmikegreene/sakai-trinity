import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiHeader extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css``;
  }

  _onClick() {
    const portalWrapper = document.querySelector('.sakai-portalWrapper');
    portalWrapper.classList.toggle('toolBarExpanded');
    document.querySelector('sakai-toolbar').classList.toggle('isExpanded');
    document
      .querySelector('sakai-toolbar')
      .shadowRoot.getElementById('sakaiToolBar')
      .classList.toggle('isExpanded');
  }
  _changeUIState(e) {
    console.log(e);
    const eventDetails = { finished: e.target.checked };
    this.dispatchEvent(
      new CustomEvent('change-ui-finished', { detail: eventDetails })
    );
  }
  _toggleQuickSideBar() {
    document.querySelector('sakai-quick-sidebar').toggleAttribute('open');
  }
  _toggleToolBar() {
    document.querySelector('sakai-toolbar').toggleAttribute('open');
  }

  render() {
    return html`
      <link
        href="/sakai-trinity/components/sakai-header.css"
        rel="stylesheet"
        type="text/css"
      />
      <header role="banner" class="sakai-topHeader">
        <a
          href="#"
          class="sakai-headerItem toggle-toolbar"
          id="toggleToolbar"
          @click=${this._toggleToolBar}
          ><ion-icon name="menu-outline" size="large"></ion-icon
        ></a>
        <div class="sakai-headerLogo">
          <a
            href="/sakai-trinity/index.html"
            class="sakai-headerLogo--institution"
            >Sakai</a
          >
        </div>

        <div class="sakai-headerSearch">
          <input type="text" class="sakaiSearch" />
          <button>Search Sakai</button>
        </div>

        <ul class="sakai-systemIndicators">
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-help"
              ><img
                src="/sakai-trinity/icons/help-circle-outline.svg"
                title="Get help with this tool"
              />Help</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-systemAlerts"
              ><img
                src="/sakai-trinity/icons/alert-circle-outline.svg"
                title="System Alerts"
              />System Alerts</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-notifications"
              ><img
                src="/sakai-trinity/icons/notifications-circle-outline.svg"
                title="Notifications of site activity"
              />Notifications</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-quickLinks"
              ><img
                src="/sakai-trinity/icons/globe.svg"
                title="Quick links to institutional resources"
              />Quick Links</a
            >
          </li>
          <li>
            <a
              href="#"
              class="sakai-headerItem sak-sysInd-account"
              @click=${e => this._toggleQuickSideBar(e)}
              ><img
                src="/sakai-trinity/images/profile02.jpg"
                title="My Account"
              />Account</a
            >
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('sakai-header', SakaiHeader);