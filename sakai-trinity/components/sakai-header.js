import { LitElement, html } from 'lit-element';

class SakaiHeader extends LitElement {
  render() {
    return html`
      <style>
        @import '../styles.css';
      </style>
      <header role="banner" class="sakai-topHeader">
        <div class="sakai-headerLogo">
          <a href="#" class="sakai-headerLogo--institution">Sakai</a>
        </div>

        <div class="sakai-headerSearch">
          <input type="text" class="sakaiSearch" />
          <button>Search Sakai</button>
        </div>

        <ul class="sakai-systemIndicators">
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-help"
              ><img
                src="../icons/help-circle-outline.svg"
                title="Get help with this tool"
              />Help</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-systemAlerts"
              ><img
                src="../icons/alert-circle-outline.svg"
                title="System Alerts"
              />System Alerts</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-notifications"
              ><img
                src="../icons/notifications-circle-outline.svg"
                title="Notifications of site activity"
              />Notifications</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-quickLinks"
              ><img
                src="../icons/globe.svg"
                title="Quick links to institutional resources"
              />Quick Links</a
            >
          </li>
          <li>
            <a href="#" class="sakai-headerItem sak-sysInd-account"
              ><img
                src="../images/profile02.jpg"
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
