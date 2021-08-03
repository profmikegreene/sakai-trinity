import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiWidgetUser extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      /**
       * URI of the html fragment.
       */
    };
  }
  static get styles() {
    return css``;
  }
  _onClick() {}
  render() {
    return html`
      <link
        href="/sakai-trinity/components/sakai-widget-user.css"
        rel="stylesheet"
        type="text/css"
      />
      <div class="sakai-profile has-avatar">
        <img src="/sakai-trinity/images/profile02.jpg" title="My Account" />
        <div class="sakai-profile__changePic sr-only">
          Change Profile Picture
        </div>
        <div class="sakai-profile__fullname">Sakai Instructor</div>
        <div class="sakai-profile__displayid">instructor</div>
      </div>
      <ul class="userNav" role="menu">
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Account Info</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Profile</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">My Connections</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Calendar</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Preferences</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Tutorial</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Themes</a>
        </li>
        <li class="sakai-userNav__submenuitem">
          <a href="#" class="sakai-headerItem">Log Out</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('sakai-widget-user', SakaiWidgetUser);
