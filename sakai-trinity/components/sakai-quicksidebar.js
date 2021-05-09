import { LitElement, html, css } from 'lit-element';

export class SakaiQuickSidebar extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: flex;
      }
      #sakai-quickSideBar {
        grid-area: sidebar;
        display: none;
        border-left: 1px solid #eee;
        transition: width 200ms ease-in;
      }
      #sakai-quickSideBar.isExpanded {
        display: flex;
      }
      .sakai-quickSideBar ul {
        position: fixed;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 4px 0 0;
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
    `;
  }
  _onClick() {
    const portalWrapper = document.querySelector('.sakai-portalWrapper');
    portalWrapper.classList.toggle('quickSideBarExpanded');
    this.shadowRoot
      .getElementById('sakai-quickSideBar')
      .classList.toggle('isExpanded');
  }
  render() {
    return html`
      <div id="sakai-quickSideBar" class="sakai-quickSideBar">
        <ul class="Mrphs-userNav__subnav" role="menu">
          <li class="Mrphs-userNav__submenuitem Mrphs-userData">
            <div class="Mrphs-userNav__submenuitem--profile-and-image">
              <div class="has-avatar">
                <a
                  role="menuitem"
                  class="Mrphs-userNav__submenuitem--profilelink"
                  href="https://trunk-mysql.nightly.sakaiproject.org/portal/site/%7Einstructor/tool-reset/a8975085-572d-4c1a-8135-049fa4bd88ce"
                  aria-haspopup="dialog"
                >
                  <span
                    class="Mrphs-userNav__submenuitem--profilepicture Mrphs-userNav__pic-changer"
                    style="background-image:url(/direct/profile/35446aad-0f59-4466-8c97-811e0672c4eb/image/thumb)"
                  ></span>
                  <span class="sr-only">Change Profile Picture</span>
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
            <div class="Mrphs-userNav__submenuitem--fullname-and-id">
              <div class="Mrphs-userNav__submenuitem--fullname">
                Sakai Instructor
              </div>
              <div class="Mrphs-userNav__submenuitem--displayid">
                instructor
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
        <ul>
          <li>
            <a
              href="#"
              class="sakai-quickIt sakai-qsb-sites"
              @click=${this._onClick}
              ><img src="../icons/grid-outline.svg" title="Sites" />Sites</a
            >
          </li>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-tasks"
              ><img src="../icons/calendar-outline.svg" title="Tasks" />Tasks</a
            >
          </li>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-grades"
              ><img
                src="../icons/shield-checkmark-outline.svg"
                title="Grades"
              />Grades</a
            >
          </li>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-calendar"
              ><img
                src="../icons/calendar-number-outline.svg"
                title="Calendar"
              />Calendar</a
            >
          </li>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-connections"
              ><img
                src="../icons/people-outline.svg"
                title="Connections"
              />Connections</a
            >
          </li>
        </ul>
        <div class="sakai-sideWidget">
          <img src="../images/tasksWidget.png" style="width:100%" />
        </div>
      </div>
    `;
  }
}

customElements.define('sakai-quick-sidebar', SakaiQuickSidebar);
