import { LitElement, html } from 'lit-element';

export class SakaiToolbar extends LitElement {
  constructor() {
    super();
  }

  _onClick(e) {
    this.classList.toggle('is-expanded');
    console.log(e);

    // Tools Menu/Bar
    // const toolBar = document.querySelector('.sakai-toolBar');
    // toolBar.querySelectorAll('.sakai-sitesNav__menuitem').forEach(item => {
    //     item.addEventListener('click', event => {
    //         event.preventDefault();
    //         item.classList.toggle("is-expanded");
    //     })
    // })
  }
  render() {
    return html`
      <style>
        @import '../styles.css';
      </style>
      <div class="sakai-toolBar">
        <ul
          class="sakai-sitesNav__menu"
          id="topnav"
          aria-label="Sites list begins here"
        >
          <li
            class="sakai-sitesNav__menuitem sakai-sitesNav__menuitem--myworkspace"
          >
            <a class="link-container" href="#" title="Home">
              <!-- <img class="icon" src="../icons/caret-forward-outline.svg" title="Open menu"> -->
              <span class="sakai-sitesNav__menuitem--myworkspace-label"
                >Home</span
              >
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="~f9d2039c-c773-4713-aa5e-2e8833806eae"
              aria-haspopup="true"
              aria-label="Open attached menu for Home to access its tools"
            ></a>
          </li>
          <li class="sakai-sitesNav__menuitem is-current">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="CMKL_807G_4344"
              role="switch"
              aria-checked="true"
              title="Toggle CMKL_807G_4344 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="CMKL_807G_4344">
              <!-- <img class="icon" src="../icons/caret-forward-outline.svg" title="Open menu"> -->
              <span>CALCULUS 1001 001 SP21</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="CMKL_807G_4344"
              aria-haspopup="true"
              title="Open attached menu for CMKL_807G_4344 to access its tools"
            ></a>
            <ul class="sakai-sitesNav__submenu" role="menu">
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Site Info"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-siteinfo"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Site Info</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Dashboard"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-dashboard"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Dashboard</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-announcements"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Announcements</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem is-current">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Assignments"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-assignment-grades"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Assignments</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-schedule"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Calendar</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-chat"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Chat Room</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-commons"></span>
                  </span>
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-feedback"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Contact Us</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Discussions"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-forums"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Discussions</span
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-dropbox"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Drop Box</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-mailtool"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title">Email</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="sakai-sitesNav__menuitem">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="ONKE_804F_3368"
              role="switch"
              aria-checked="true"
              title="Toggle ONKE_804F_3368 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="ONKE_804F_3368">
              <span>ONKE_804F_3368</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="ONKE_804F_3368"
              aria-haspopup="true"
              title="Open attached menu for ONKE_804F_3368 to access its tools"
            ></a>
            <ul class="sakai-sitesNav__submenu expanded" role="menu">
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Site Info"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-siteinfo"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Site Info</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Dashboard"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-dashboard"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Dashboard</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-announcements"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Announcements</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem is-current">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Assignments"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-assignment-grades"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Assignments</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-schedule"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Calendar</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-chat"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Chat Room</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-commons"></span>
                  </span>
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-feedback"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Contact Us</span
                  >
                </a>
              </li>
              <li class="sakai-sitesNav__submenuitem">
                <a
                  tabindex="-1"
                  class="sakai-sitesNav__submenuitem-link"
                  role="menuitem"
                  href="#"
                  title="Discussions"
                >
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-forums"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Discussions</span
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span class="toolMenuIcon icon-sakai--sakai-dropbox"></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title"
                    >Drop Box</span
                  >
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
                  <span class="sakai-sitesNav__submenuitem-icon">
                    <span
                      class="toolMenuIcon icon-sakai--sakai-mailtool"
                    ></span>
                  </span>
                  <span class="sakai-sitesNav__submenuitem-title">Email</span>
                </a>
              </li>
              <li
                class="sakai-sitesNav__submenuitem sakai-sitesNav__submenuitem__gotosite"
              >
                <a
                  tabindex="-1"
                  role="menuitem"
                  href="#"
                  title="Go to the site to view all"
                >
                  <span class="toolMenuIcon icon-sakai--see-all-tools"></span>
                  Go to the site to view all
                </a>
              </li>
            </ul>
          </li>
          <li class="sakai-sitesNav__menuitem">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="PEEE_533C_0324"
              role="switch"
              aria-checked="true"
              title="Toggle PEEE_533C_0324 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="PEEE_533C_0324">
              <span>PEEE_533C_0324</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="PEEE_533C_0324"
              aria-haspopup="true"
              title="Open attached menu for PEEE_533C_0324 to access its tools"
            ></a>
          </li>
          <li class="sakai-sitesNav__menuitem">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="RSJB_534V_4301"
              role="switch"
              aria-checked="true"
              title="Toggle RSJB_534V_4301 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="RSJB_534V_4301">
              <span>RSJB_534V_4301</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="RSJB_534V_4301"
              aria-haspopup="true"
              title="Open attached menu for RSJB_534V_4301 to access its tools"
            ></a>
          </li>
          <li class="sakai-sitesNav__menuitem">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="WOMM_713Q_1989"
              role="switch"
              aria-checked="true"
              title="Toggle WOMM_713Q_1989 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="WOMM_713Q_1989">
              <span>WOMM_713Q_1989</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="WOMM_713Q_1989"
              aria-haspopup="true"
              title="Open attached menu for WOMM_713Q_1989 to access its tools"
            ></a>
          </li>
          <li class="sakai-sitesNav__menuitem">
            <a
              class="sakai-sitesNav__favbtn fav"
              href="#"
              data-site-id="KENI_450P_5054"
              role="switch"
              aria-checked="true"
              title="Toggle KENI_450P_5054 as a favorite site"
            ></a>
            <a class="link-container" href="#" title="KENI_450P_5054">
              <span>KENI_450P_5054</span>
            </a>
            <a
              class="sakai-sitesNav__dropdown"
              href="#"
              data-site-id="KENI_450P_5054"
              aria-haspopup="true"
              title="Open attached menu for KENI_450P_5054 to access its tools"
            ></a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('sakai-toolbar', SakaiToolbar);
