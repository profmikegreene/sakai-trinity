import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiToolbarSite extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
      emoji: { type: String },
      courseId: { type: String },
      courseTitle: { type: String },
      isCurrent: { type: Boolean },
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
  connectedCallback() {
    super.connectedCallback();
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: inherit;

        --current-background: #d4ebf9;
        --current-background--hover: #a0d3f2;
        --current-background--active: #6cbbeb;
        --link-background--hover: #a0d3f2;
        --link-current-background--active: #6cbbeb;
      }
      :host([open]) {
        height: auto;
        flex-direction: column;
        align-items: flex-start;
      }
      a,
      a:visited {
        color: #212121;
      }
      .sakai-sitesNav__menuitem {
        /* display: flex; */
        align-items: center;
        justify-content: left;
        margin: 0;
        border-bottom: 2px solid #ddd;
        overflow: hidden;
        list-style: none;
      }
      .sakai-sitesNav__menuitem:first-of-type {
        margin-top: 0;
      }
      .sakai-sitesNav__submenuitem {
        margin: 4px 0;
        list-style: none;
        display: block;
      }
      .sakai-sitesNav__submenu {
        display: none;
        padding: 0;
        margin: 0;
      }
      :host([open]) .sakai-sitesNav__submenu {
        display: flex;
        height: auto;
        flex-direction: column;
        align-items: stretch;
      }
      .sakai-sitesNav__menuitem a {
        text-decoration: none;
      }
      .sakai-sitesNav__submenuitem-link {
        padding: 4px;
        padding-left: 16px;
        display: block;
      }

      .sakai-sitesNav__submenuitem-title {
        display: inline-block;
      }
      .sakai-sitesNav__submenuitem-link:hover,
      .sakai-sitesNav__submenuitem-link:active {
        background: var(--link-background--hover);
      }
      .sakai-sitesNav__submenuitem-link:active {
        background: var(--link-background--active);
      }
      .link-container {
        display: flex;
        flex-flow: row wrap;
        width: calc(
          var(--toolBarWidth) - 40px - 16px - 18px
        ); /* 16px for padding, 18px for border */
        padding: 8px;
      }
      .link-container span {
        line-height: 1.5;
      }
      .sakai-sitesNav__menuitemtitle {
        display: flex;
      }
      .sakai-sitesNav__favbtn,
      .sakai-sitesNav__settingsLink {
        width: 24px;
        height: 24px;
        line-height: 24px;
      }
      .sakai-sitesNav__settingsLink {
        padding: 8px;
        position: relative;
        text-align: center;
      }
      .sakai-sitesNav__favbtn:empty {
        content: url('../icons/star.svg');
        padding: 2px;
      }
      .sakai-sitesNav__favbtn svg {
        fill: gold;
      }
      .link-container:hover .sakai-sitesNav__favbtn {
        content: url('../icons/caret-forward-outline.svg');
      }
      .sakai-sitesNav__settingsTitle {
        display: none;
      }
      .sakai-sitesNav__settingsLink:hover .sakai-sitesNav__settingsTitle,
      .sakai-sitesNav__settingsLink:active .sakai-sitesNav__settingsTitle,
      .sakai-sitesNav__settingsLink:focus .sakai-sitesNav__settingsTitle {
        display: inline-block;
        position: absolute;
        left: -75px;
        top: 0;
        background: #333;
        color: #fefefe;
        padding: 8px;
      }
      .is-expanded .link-container:hover .sakai-sitesNav__favbtn {
        content: url('../icons/caret-down-outline.svg');
      }
      .courseId,
      .courseTitle {
        display: inline-block;
      }
      .courseTitle {
        margin-left: 28px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .is-current .is-current a {
        background: var(--current-background);
      }
      .is-current .is-current a:hover,
      .is-current .is-current a:focus {
        background: var(--current-background--hover);
      }
      .is-current .is-current a:active {
        background: var(--current-background--active);
      }
    `;
  }

  render() {
    return html` <li class="sakai-sitesNav__menuitem">
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
            <span class="sakai-sitesNav__submenuitem-title">Announcements</span>
          </a>
        </li>
        <li class="sakai-sitesNav__submenuitem is-current">
          <a
            tabindex="-1"
            class="sakai-sitesNav__submenuitem-link"
            role="menuitem"
            href="/sakai-trinity/assignments/index.html"
            title="Assignments"
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
            <span class="sakai-sitesNav__submenuitem-title">Conversations</span>
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
