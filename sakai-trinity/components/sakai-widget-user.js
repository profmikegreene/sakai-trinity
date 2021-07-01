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
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .has-avatar,
      .userNav {
        width: 371px;
      }
      .has-avatar {
      }
      .userNav {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `;
  }
  _onClick() {}
  render() {
    return html`
    <div class="Mrphs-userNav__submenuitem--profile-and-image has-avatar">
    <img
      src="../images/profile02.jpg"
      title="My Account"
    />
        <div class="sr-only">Change Profile Picture</div>
    <div class="Mrphs-userNav__submenuitem--fullname">
      Sakai Instructor
    </div>
    <div class="Mrphs-userNav__submenuitem--displayid">
      instructor
    </div>
  </div>
<ul class="userNav" role="menu">
<li class="Mrphs-userNav__submenuitem Mrphs-userData">
  
  <a
    href="#"
    class="sakai-headerItem sak-sysInd-account"
    >Account Info</a
  >

      </a>
    </div>
    <div class="Mrphs-userNav__submenuitem--profile">
      <a
        role="menuitem"
        href="https://trunk-mysql.nightly.sakaiproject.org/portal/site/%7Einstructor/tool-reset/a8975085-572d-4c1a-8135-049fa4bd88ce"
      >
        <span>Profile</span>
      </a>
    </div>
  </div>
  
</li>

<li
  class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented"
>
  <a
    role="menuitem"
    href="javascript:;"
    id="Mrphs-userNav__submenuitem--connections"
    aria-haspopup="dialog"
  >
    <span>My Connections</span>
  </a>
</li>

<li
  class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented"
>
  <a
    role="menuitem"
    href="https://trunk-mysql.nightly.sakaiproject.org/portal/site/%7Einstructor/page/dd167682-69b3-4c6a-ad3b-1853eca61b4d"
    class="Mrphs-userNav__submenuitem--calendar"
  >
    <span>Calendar</span>
  </a>
</li>

<li
  class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented"
>
  <a
    role="menuitem"
    href="https://trunk-mysql.nightly.sakaiproject.org/portal/site/%7Einstructor/page/c86e42a3-fce4-4cfe-a180-26f6ec47648a"
    class="Mrphs-userNav__submenuitem--prefs"
  >
    <span>Preferences</span>
  </a>
</li>

<li
  class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented"
>
  <a
    id="tutorialLink"
    role="menuitem"
    href="#"
    onclick="startTutorial({});"
    class="Mrphs-userNav__submenuitem--tutorial"
    aria-haspopup="dialog"
  >
    <span>Tutorial</span>
  </a>
</li>

<li
  class="Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented Mrphs-userNav__submenuitem-toggle"
>
  <label for="sakai-darkThemeSwitcher" class="sakaiThemeSwitch"
    >Dark Theme</label
  >
  <button
    role="switch"
    aria-checked="false"
    id="sakai-darkThemeSwitcher"
    class="Mrphs-userNav__submenuitem--themeSwitcher switch"
  >
    <span>Off</span>
    <span>On</span>
  </button>
</li>

<li class="Mrphs-userNav__logout Mrphs-userNav__submenuitem-indented">
  <div id="loginLinksImage" class="Mrphs-loginUser">
    <p class="Mrphs-loginUser__menuitem">
      <a
        href="https://trunk-mysql.nightly.sakaiproject.org/portal/logout"
        title="Log Out"
        id="loginLink1"
        class="Mrphs-loginUser__message"
        data-warning=""
      >
        <i class="login-Icon"></i>
        <span class="Mrphs-login-Message">Log Out</span>
      </a>
    </p>
  </div>
</li>
</ul>
    `;
  }
}

customElements.define('sakai-widget-user', SakaiWidgetUser);
