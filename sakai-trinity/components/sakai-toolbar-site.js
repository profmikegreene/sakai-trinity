import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiToolbarSite extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
      emoji: { type: String },
      courseId: { type: String },
      courseTitle: { type: String },
      isCurrent: { type: Boolean },
      showSelected: { type: Boolean },
      toolId: { type: String },
    };
  }
  set emoji(val) {
    let oldVal = this._emoji;
    this._emoji = val;
    let newVal = val === '' ? '<ion-icon name="star"></ion-icon>' : oldVal;
    console.log(typeof val, val, typeof oldVal, oldVal, typeof newVal, newVal);
    this.requestUpdate('emoji', newVal);
  }
  get emoji() {
    return this._emoji;
  }
  constructor() {
    super();
    this.open = false;
    this._emoji = '';
    this.courseId = '';
    this.courseTitle = '';
    this.isCurrent = false;
    this.showSelected = false;
    this.toolId = '';
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
    // this.toggleOpen();
  }
  toggleOpen(e) {
    console.log(e);
    this.toggleAttribute('open');
  }
  isCurrentTool(toolId) {
    return this.toolId === toolId;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  static get styles() {
    return css``;
  }

  render() {
    let cssClass = (this.showSelected) ? 'showSelected' : '';
    return html` <link
        href="/sakai-trinity/components/sakai-toolbar-site.css"
        rel="stylesheet"
        type="text/css"
      />
      <li class="sakai-sitesNav__menuitem">
        <div class="sakai-sitesNav__menuitemtitle">
          <a
            class="link-container"
            href="#"
            title="${this.courseId}"
            @click=${this.toggleOpen}
          >
            <span
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="${this.courseId}"
              role="switch"
              aria-checked="true"
              title="Collapse ${this.courseId} in the menu"
              >${this.emoji}</span
            >
            <ion-icon class="favStar" name="star"></ion-icon>
            <span class="courseId">${this.courseId}</span>
            <span class="courseTitle">${this.courseTitle}</span>
          </a>
          <a
            tabindex="-1"
            class="sakai-sitesNav__settingsLink"
            role="menuitem"
            href="/sakai-trinity/site-info.html"
            title="Site Info"
          >
            <ion-icon name="cog-outline"></ion-icon>
            <span class="sakai-sitesNav__settingsTitle">Site Info</span>
          </a>

          <a
            class="sakai-sitesNav__dropdown"
            href="#"
            data-site-id="${this.courseId}"
            aria-haspopup="true"
            title="Open attached menu for ${this.courseId} to access its tools"
          ></a>
        </div>
        <ul class="sakai-sitesNav__submenu" role="menu">
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="/sakai-trinity/courseIndex.html"
              title="Dashboard"
              ?isCurrent=${this.isCurrentTool('Dashboard')}
            >
              <ion-icon name="speedometer-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Dashboard</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Site Info"
            >
              <ion-icon name="cog-outline"></ion-icon>

              <span class="sakai-sitesNav__submenuitem-title">Site Info</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Announcements"
            >
              <ion-icon name="megaphone-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title"
                >Announcements</span
              >
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem" >
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="/sakai-trinity/assignments/index.html"
              title="Assignments"
              ?isCurrent=${this.isCurrentTool('Assignments')}

            >
              <ion-icon name="newspaper-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Assignments</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Calendar"
            >
              <ion-icon name="calendar-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Calendar</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Chat Room"
            >
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Chat Room</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Commons"
            >
              <ion-icon name="storefront-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Commons</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Contact Us"
            >
              <ion-icon name="paper-plane-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Contact Us</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Conversations"
            >
              <ion-icon name="chatbubbles-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title"
                >Conversations</span
              >
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Drop Box"
            >
              <ion-icon name="file-tray-full-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Drop Box</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Email"
            >
              <ion-icon name="mail-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Email</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Gradebook"
            >
              <ion-icon name="trophy-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Gradebook</span>
            </a>
          </li>
          <li class="sakai-sitesNav__submenuitem">
            <a
              tabindex="-1"
              class="sakai-sitesNav__submenuitem-link"
              role="menuitem"
              href="#"
              title="Resources"
            >
              <ion-icon name="library-outline"></ion-icon>
              <span class="sakai-sitesNav__submenuitem-title">Resources</span>
            </a>
          </li>
        </ul>
      </li>`;
  }
}

customElements.define('sakai-toolbar-site', SakaiToolbarSite);
