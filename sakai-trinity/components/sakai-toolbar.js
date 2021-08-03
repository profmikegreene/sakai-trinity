import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import './sakai-toolbar-site.js';

export class SakaiToolbar extends LitElement {
  constructor() {
    super();
    this.open = false;
    this.isToolPage = false;
    this.courseId = '';
    this.courseTitle = '';
    this.toolId = '';
  }
  static get properties() {
    return {
      open: { type: Boolean },
      isToolPage: { type: Boolean },
      courseId: { type: String },
      courseTitle: { type: String },
      toolId: { type: String },
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
        '--toolBarWidth',
        pageStyles.getPropertyValue('--toolBarOpenWidth')
      );
    } else if (!this.open) {
      document.documentElement.style.setProperty(
        '--toolBarWidth',
        pageStyles.getPropertyValue('--toolBarClosedWidth')
      );
    }
  }
  toggleDropdown(e) {
    console.log(e);
    e.path[1].classList.toggle('is-expanded');
    e.path[1].toggleAttribute('open');
    console.log(e.path[1].classList);
  }

  isCurrentCourse(courseId) {
    return this.courseId === courseId;
  }

  // _onClick(e) {
  //   this.classList.toggle('is-expanded');
  //   console.log(e);
  // }
  connectedCallback() {
    super.connectedCallback();
    this.toggleOpen();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <link
        href="/sakai-trinity/components/sakai-toolbar.css"
        rel="stylesheet"
        type="text/css"
      />
      <div class="sakai-toolBar" id="sakaiToolBar">
        <ul
          class="sakai-sitesNav__menu"
          id="topnav"
          aria-label="Sites list begins here"
        >
          <sakai-toolbar-site
            emoji=""
            courseId="${this.courseId}"
            courseTitle="${this.courseTitle}"
            ?open=${this.open}
            ?isCurrent=${this.isToolPage &&
            this.isCurrentCourse('CALCULUS 101 - 001 Sp21')}
            ?showSelected=${this.isToolPage}
            .toolId=${this.toolId}
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="🐒"
            courseId="EVOLBIO 2001 001 FW21"
            courseTitle="Physical Ocean - Evolutionary Biology"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="👩‍⚕️"
            courseId="NURSING 680 - 01 Sp21"
            courseTitle="Nurse Practice III"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="🖥️"
            courseId="ENGR 101 - 01 Sp21"
            courseTitle="Fluid Dynamics"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="🎭"
            courseId="GREEK 103 - 01 Sp21"
            courseTitle="Greek Theatre"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="💉"
            courseId="ANESTH 440C - 41 Sp21"
            courseTitle="Foreign Educated Pt Course"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="💃🏼"
            courseId="SPANISH 412 - 01 Sp21"
            courseTitle="Foreign Educated Pt Course"
          ></sakai-toolbar-site>
          <sakai-toolbar-site
            emoji="🌎"
            courseId="SMPL101 Spring 2021"
            courseTitle="Foreign Educated Pt Course"
          ></sakai-toolbar-site>
          <li id="membership"></li>
        </ul>
        <div id="manageSidebar">
          <a href="/sakai-trinity/membership.html">
            <ion-icon name="apps-outline"></ion-icon>
            <span>View all my sites</span></a
          >
          <!-- <ion-icon name="star-half-outline"></ion-icon>
          <a href="#">Manage Sidebar</a> -->
          <div
            class="tab-box"
            id="mySites"
            aria-labelledby="tab-othersites"
            role="tabpanel"
          >
            <p style="" class="favorites-help-text autofavorite-enabled">
              Star sites below to add them to your favorites bar. New sites will
              be automatically added to your favorites.
            </p>
            <p
              style="display: none"
              class="favorites-help-text autofavorite-disabled"
            >
              Star sites below to add them to your favorites bar.
            </p>

            <hr />

            <div id="otherSiteSearch">
              <label for="txtSearch">Filter sites</label>
              <input
                type="text"
                id="txtSearch"
                name="txtSearch"
                maxlength="50"
              />
              <a
                id="otherSiteSearchClear"
                class="other-site-search-clear"
                href="javascript:void(0);"
              ></a>
            </div>
            <div id="noSearchResults" class="is-hidden">
              No search results found
            </div>

            <div class="moresites-left-col">
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-favorite"></i></a
                  >2021 Summer Term 1
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="16ce2b14-e729-478c-9d70-32cb7a872f2b"
                      href="javascript:void(0);"
                      title="Remove EdDisc 101 01 1765 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/16ce2b14-e729-478c-9d70-32cb7a872f2b"
                        title="EdDisc 101 01 1765"
                      >
                        <span class="fullTitle">EdDisc 101 01 1765</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="16ce2b14-e729-478c-9d70-32cb7a872f2b"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for EdDisc 101 01 1765 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-favorite"></i></a
                  >2021 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="f7622e78-97e4-49bc-adb1-1f7d77a066fd"
                      href="javascript:void(0);"
                      title="Remove ADVTMP TST 01 1750 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/f7622e78-97e4-49bc-adb1-1f7d77a066fd"
                        title="ADVTMP TST 01 1750"
                      >
                        <span class="fullTitle">ADVTMP TST 01 1750</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="f7622e78-97e4-49bc-adb1-1f7d77a066fd"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for ADVTMP TST 01 1750 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="519926df-0e1d-439e-9698-5be43be53e57"
                      href="javascript:void(0);"
                      title="Remove Example Sp 21 1750 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/519926df-0e1d-439e-9698-5be43be53e57"
                        title="Example Sp 21 1750"
                      >
                        <span class="fullTitle">Example Sp 21 1750</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="519926df-0e1d-439e-9698-5be43be53e57"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Example Sp 21 1750 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >DKU 2020 Summer Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="0c6e0ebc-284d-4fb4-acc5-1dfef55496fc"
                      href="javascript:void(0);"
                      title="Add CHSC.101.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/0c6e0ebc-284d-4fb4-acc5-1dfef55496fc"
                        title="CHSC.101.001.Su20"
                      >
                        <span class="fullTitle">CHSC.101.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="0c6e0ebc-284d-4fb4-acc5-1dfef55496fc"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for CHSC.101.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="c7e8b9e0-5d14-4b4b-9b4b-871bdc067c46"
                      href="javascript:void(0);"
                      title="Add CHSC.102.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/c7e8b9e0-5d14-4b4b-9b4b-871bdc067c46"
                        title="CHSC.102.001.Su20"
                      >
                        <span class="fullTitle">CHSC.102.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="c7e8b9e0-5d14-4b4b-9b4b-871bdc067c46"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for CHSC.102.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="49e6a02a-e2e7-4e72-939d-4e950d0ef134"
                      href="javascript:void(0);"
                      title="Add DKU Flexible Teaching to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/49e6a02a-e2e7-4e72-939d-4e950d0ef134"
                        title="DKU Flexible Teaching"
                      >
                        <span class="fullTitle">DKU Flexible Teaching</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="49e6a02a-e2e7-4e72-939d-4e950d0ef134"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for DKU Flexible Teaching to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="0d675570-934c-4108-b2c9-ce2a38339d6d"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.109.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/0d675570-934c-4108-b2c9-ce2a38339d6d"
                        title="PHYSEDU.109.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.109.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="0d675570-934c-4108-b2c9-ce2a38339d6d"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.109.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="89260430-432f-44e1-a440-12d18fbe5a06"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.112.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/89260430-432f-44e1-a440-12d18fbe5a06"
                        title="PHYSEDU.112.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.112.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="89260430-432f-44e1-a440-12d18fbe5a06"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.112.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="92f07f63-2f7b-4aaa-8fce-fd16f4930acb"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.112.002.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/92f07f63-2f7b-4aaa-8fce-fd16f4930acb"
                        title="PHYSEDU.112.002.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.112.002.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="92f07f63-2f7b-4aaa-8fce-fd16f4930acb"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.112.002.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="931b78b8-bd4b-4220-aef0-8c9ea8caae3f"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.113.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/931b78b8-bd4b-4220-aef0-8c9ea8caae3f"
                        title="PHYSEDU.113.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.113.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="931b78b8-bd4b-4220-aef0-8c9ea8caae3f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.113.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="52544c23-8b9d-4302-b346-68ba72e336aa"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.113.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/52544c23-8b9d-4302-b346-68ba72e336aa"
                        title="PHYSEDU.113.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.113.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="52544c23-8b9d-4302-b346-68ba72e336aa"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.113.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="a40ff224-83b1-4956-bb6b-a475547af287"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.115-2.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/a40ff224-83b1-4956-bb6b-a475547af287"
                        title="PHYSEDU.115-2.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.115-2.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="a40ff224-83b1-4956-bb6b-a475547af287"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.115-2.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="4a9549ad-9f35-4b74-9aca-218be00b9857"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.115-3.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/4a9549ad-9f35-4b74-9aca-218be00b9857"
                        title="PHYSEDU.115-3.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.115-3.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="4a9549ad-9f35-4b74-9aca-218be00b9857"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.115-3.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="5e82bd41-ce06-4ade-a9a1-336172d8bc58"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.115-3.002.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/5e82bd41-ce06-4ade-a9a1-336172d8bc58"
                        title="PHYSEDU.115-3.002.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.115-3.002.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="5e82bd41-ce06-4ade-a9a1-336172d8bc58"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.115-3.002.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="a65677eb-1cb3-42b0-bc4a-946e4e5019cb"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.120.001.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/a65677eb-1cb3-42b0-bc4a-946e4e5019cb"
                        title="PHYSEDU.120.001.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.120.001.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="a65677eb-1cb3-42b0-bc4a-946e4e5019cb"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.120.001.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="f7c94e1a-1271-490c-a8bf-0d3678241f1e"
                      href="javascript:void(0);"
                      title="Add PHYSEDU.120.003.Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/f7c94e1a-1271-490c-a8bf-0d3678241f1e"
                        title="PHYSEDU.120.003.Su20"
                      >
                        <span class="fullTitle">PHYSEDU.120.003.Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="f7c94e1a-1271-490c-a8bf-0d3678241f1e"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PHYSEDU.120.003.Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="50399a74-acd5-4c3c-90f4-53d15323adaa"
                      href="javascript:void(0);"
                      title="Remove RA Training 101 2020 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/50399a74-acd5-4c3c-90f4-53d15323adaa"
                        title="RA Training 101 2020"
                      >
                        <span class="fullTitle">RA Training 101 2020</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="50399a74-acd5-4c3c-90f4-53d15323adaa"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for RA Training 101 2020 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="38af8bcb-ace9-4561-a87b-779ff67a5097"
                      href="javascript:void(0);"
                      title="Add TWT 101 001 Su20 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/38af8bcb-ace9-4561-a87b-779ff67a5097"
                        title="TWT 101 001 Su20"
                      >
                        <span class="fullTitle">TWT 101 001 Su20</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="38af8bcb-ace9-4561-a87b-779ff67a5097"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for TWT 101 001 Su20 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-favorite"></i></a
                  >2020 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="2c2baeb2-3f23-45d4-8c28-4253a1a1735e"
                      href="javascript:void(0);"
                      title="Remove MG Advanced Template from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/2c2baeb2-3f23-45d4-8c28-4253a1a1735e"
                        title="MG Advanced Template"
                      >
                        <span class="fullTitle">MG Advanced Template</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="2c2baeb2-3f23-45d4-8c28-4253a1a1735e"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for MG Advanced Template to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2019 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="a4b7089f-9e85-4623-a2de-7af0668dc7fe"
                      href="javascript:void(0);"
                      title="Add codeplus 100 01 1700 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/a4b7089f-9e85-4623-a2de-7af0668dc7fe"
                        title="codeplus 100 01 1700"
                      >
                        <span class="fullTitle">codeplus 100 01 1700</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="a4b7089f-9e85-4623-a2de-7af0668dc7fe"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for codeplus 100 01 1700 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="4d238b72-fd3b-4420-aff2-5059393ec137"
                      href="javascript:void(0);"
                      title="Remove Forum Demo Course from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/4d238b72-fd3b-4420-aff2-5059393ec137"
                        title="Forum Demo Course"
                      >
                        <span class="fullTitle">Forum Demo Course</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="4d238b72-fd3b-4420-aff2-5059393ec137"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Forum Demo Course to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="71cb046e-df0f-4e8b-a98f-d5324d65a49f"
                      href="javascript:void(0);"
                      title="Add MGMG 100 10 1700 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/71cb046e-df0f-4e8b-a98f-d5324d65a49f"
                        title="MGMG 100 10 1700"
                      >
                        <span class="fullTitle">MGMG 100 10 1700</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="71cb046e-df0f-4e8b-a98f-d5324d65a49f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for MGMG 100 10 1700 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="ef998863-d36e-434e-8dd1-b5d6c65b1a36"
                      href="javascript:void(0);"
                      title="Remove qapratt 100 01 1700 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/ef998863-d36e-434e-8dd1-b5d6c65b1a36"
                        title="qapratt 100 01 1700"
                      >
                        <span class="fullTitle">qapratt 100 01 1700</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="ef998863-d36e-434e-8dd1-b5d6c65b1a36"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for qapratt 100 01 1700 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2019 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="cacca2a1-505a-4295-8a0c-2bc843c5e162"
                      href="javascript:void(0);"
                      title="Add LILLIAN 100 01 1670 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/cacca2a1-505a-4295-8a0c-2bc843c5e162"
                        title="LILLIAN 100 01 1670"
                      >
                        <span class="fullTitle">LILLIAN 100 01 1670</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="cacca2a1-505a-4295-8a0c-2bc843c5e162"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for LILLIAN 100 01 1670 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="ad75a63d-b3dd-4b4b-95ad-5fb9ea68cad7"
                      href="javascript:void(0);"
                      title="Remove SAK19 101 01 1670 from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/ad75a63d-b3dd-4b4b-95ad-5fb9ea68cad7"
                        title="SAK19 101 01 1670"
                      >
                        <span class="fullTitle">SAK19 101 01 1670</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="ad75a63d-b3dd-4b4b-95ad-5fb9ea68cad7"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for SAK19 101 01 1670 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2018 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="797c0719-9cc0-4785-a65b-a7def80e284c"
                      href="javascript:void(0);"
                      title="Add CRDMRK TST 01 1660 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/797c0719-9cc0-4785-a65b-a7def80e284c"
                        title="CRDMRK TST 01 1660"
                      >
                        <span class="fullTitle">CRDMRK TST 01 1660</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="797c0719-9cc0-4785-a65b-a7def80e284c"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for CRDMRK TST 01 1660 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="47b228b9-0bd2-4672-91ac-123ce8eaa507"
                      href="javascript:void(0);"
                      title="Add SK12 01 101 1660 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/47b228b9-0bd2-4672-91ac-123ce8eaa507"
                        title="SK12 01 101 1660"
                      >
                        <span class="fullTitle">SK12 01 101 1660</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="47b228b9-0bd2-4672-91ac-123ce8eaa507"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for SK12 01 101 1660 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2018 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="edf65889-eeda-4721-813e-1c240173b61c"
                      href="javascript:void(0);"
                      title="Add COMPSCI.201.001.Sp18 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/edf65889-eeda-4721-813e-1c240173b61c"
                        title="COMPSCI.201.001.Sp18"
                      >
                        <span class="fullTitle">COMPSCI.201.001.Sp18</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="edf65889-eeda-4721-813e-1c240173b61c"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for COMPSCI.201.001.Sp18 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="12d446eb-6412-48f2-855e-df5bdf86fce0"
                      href="javascript:void(0);"
                      title="Add consent bld 01 1630 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/12d446eb-6412-48f2-855e-df5bdf86fce0"
                        title="consent bld 01 1630"
                      >
                        <span class="fullTitle">consent bld 01 1630</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="12d446eb-6412-48f2-855e-df5bdf86fce0"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for consent bld 01 1630 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="20416fa9-7236-4a64-997a-b70c10cc952d"
                      href="javascript:void(0);"
                      title="Add EGR.206.01.Sp18 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/20416fa9-7236-4a64-997a-b70c10cc952d"
                        title="EGR.206.01.Sp18"
                      >
                        <span class="fullTitle">EGR.206.01.Sp18</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="20416fa9-7236-4a64-997a-b70c10cc952d"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for EGR.206.01.Sp18 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="6511cc30-efde-4ebd-8bc1-293a87defd4f"
                      href="javascript:void(0);"
                      title="Add TEST 101 01 1630 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/6511cc30-efde-4ebd-8bc1-293a87defd4f"
                        title="TEST 101 01 1630"
                      >
                        <span class="fullTitle">TEST 101 01 1630</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="6511cc30-efde-4ebd-8bc1-293a87defd4f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for TEST 101 01 1630 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2017 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="29e63d4d-a2f1-4efd-b548-4c227f153d94"
                      href="javascript:void(0);"
                      title="Add ECE.564.01.F17 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/29e63d4d-a2f1-4efd-b548-4c227f153d94"
                        title="ECE.564.01.F17"
                      >
                        <span class="fullTitle">ECE.564.01.F17</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="29e63d4d-a2f1-4efd-b548-4c227f153d94"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for ECE.564.01.F17 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2017 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="15df7a5e-c3be-4f1c-b459-4642826c671a"
                      href="javascript:void(0);"
                      title="Add NURSING.965.03.Sp17 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/15df7a5e-c3be-4f1c-b459-4642826c671a"
                        title="NURSING.965.03.Sp17"
                      >
                        <span class="fullTitle">NURSING.965.03.Sp17</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="15df7a5e-c3be-4f1c-b459-4642826c671a"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for NURSING.965.03.Sp17 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2016 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="ad33ede6-baa1-4e27-8836-6b669239632f"
                      href="javascript:void(0);"
                      title="Add CIT Show 100 01 1580 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/ad33ede6-baa1-4e27-8836-6b669239632f"
                        title="CIT Show 100 01 1580"
                      >
                        <span class="fullTitle">CIT Show 100 01 1580</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="ad33ede6-baa1-4e27-8836-6b669239632f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for CIT Show 100 01 1580 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="b06f03d7-f570-404a-8813-bb6421b9186b"
                      href="javascript:void(0);"
                      title="Add ENVIRON.716L.001.F16 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/b06f03d7-f570-404a-8813-bb6421b9186b"
                        title="ENVIRON.716L.001.F16"
                      >
                        <span class="fullTitle">ENVIRON.716L.001.F16</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="b06f03d7-f570-404a-8813-bb6421b9186b"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for ENVIRON.716L.001.F16 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="a0292ad6-b934-4aa6-950b-7d4a503fad4a"
                      href="javascript:void(0);"
                      title="Add Respondu 100 01 1580 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/a0292ad6-b934-4aa6-950b-7d4a503fad4a"
                        title="Respondu 100 01 1580"
                      >
                        <span class="fullTitle">Respondu 100 01 1580</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="a0292ad6-b934-4aa6-950b-7d4a503fad4a"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Respondu 100 01 1580 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2016 Summer Term 1
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="c2063418-0fa6-4864-a75e-4964621e3217"
                      href="javascript:void(0);"
                      title="Add NURSING.595.001.1Su16 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/c2063418-0fa6-4864-a75e-4964621e3217"
                        title="NURSING.595.001.1Su16"
                      >
                        <span class="fullTitle">NURSING.595.001.1Su16</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="c2063418-0fa6-4864-a75e-4964621e3217"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for NURSING.595.001.1Su16 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="63bbca42-a2ac-4490-ae5a-2372b0cfcc7f"
                      href="javascript:void(0);"
                      title="Add NURSING.681.01.1Su16 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/63bbca42-a2ac-4490-ae5a-2372b0cfcc7f"
                        title="NURSING.681.01.1Su16"
                      >
                        <span class="fullTitle">NURSING.681.01.1Su16</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="63bbca42-a2ac-4490-ae5a-2372b0cfcc7f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for NURSING.681.01.1Su16 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2016 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="39ad9466-9b95-4a5a-9d7f-2730e0321e39"
                      href="javascript:void(0);"
                      title="Add GLHLTH mockup 101 1550 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/39ad9466-9b95-4a5a-9d7f-2730e0321e39"
                        title="GLHLTH mockup 101 1550"
                      >
                        <span class="fullTitle">GLHLTH mockup 101 1550</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="39ad9466-9b95-4a5a-9d7f-2730e0321e39"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for GLHLTH mockup 101 1550 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="68dc3c28-f3b3-4f00-aae3-4731ebcb5e08"
                      href="javascript:void(0);"
                      title="Add NURSING.681.01.Sp16 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/68dc3c28-f3b3-4f00-aae3-4731ebcb5e08"
                        title="NURSING.681.01.Sp16"
                      >
                        <span class="fullTitle">NURSING.681.01.Sp16</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="68dc3c28-f3b3-4f00-aae3-4731ebcb5e08"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for NURSING.681.01.Sp16 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2015 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="8ac6d8a6-1188-4d80-b510-7ee152cfb304"
                      href="javascript:void(0);"
                      title="Add Shawn 0001 001 1540 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/8ac6d8a6-1188-4d80-b510-7ee152cfb304"
                        title="Shawn 0001 001 1540"
                      >
                        <span class="fullTitle">Shawn 0001 001 1540</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="8ac6d8a6-1188-4d80-b510-7ee152cfb304"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Shawn 0001 001 1540 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2015 Spring Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="451dc10a-09c2-4ee1-a3e8-81d445a0a9ba"
                      href="javascript:void(0);"
                      title="Add WW 101 01 1510 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/451dc10a-09c2-4ee1-a3e8-81d445a0a9ba"
                        title="WW 101 01 1510"
                      >
                        <span class="fullTitle">WW 101 01 1510</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="451dc10a-09c2-4ee1-a3e8-81d445a0a9ba"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for WW 101 01 1510 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >2014 Fall Term
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="62eaec49-077b-45df-8dc1-f47447e0d492"
                      href="javascript:void(0);"
                      title="Add Jolie's Test Site to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/62eaec49-077b-45df-8dc1-f47447e0d492"
                        title="Jolie's Test Site"
                      >
                        <span class="fullTitle">Jolie's Test Site</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="62eaec49-077b-45df-8dc1-f47447e0d492"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Jolie's Test Site to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >Duke Extend
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="4df14a81-c0b1-443d-bafb-0150ce764385"
                      href="javascript:void(0);"
                      title="Add 9/11 And Its Aftermath to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/4df14a81-c0b1-443d-bafb-0150ce764385"
                        title="9/11 And Its Aftermath"
                      >
                        <span class="fullTitle">9/11 And Its Aftermath</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="4df14a81-c0b1-443d-bafb-0150ce764385"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for 9/11 And Its Aftermath to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="16d3cd01-2efb-4d73-a889-10fbe38ae604"
                      href="javascript:void(0);"
                      title="Add ArcGIS 001 001 1670 to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/16d3cd01-2efb-4d73-a889-10fbe38ae604"
                        title="ArcGIS 001 001 1670"
                      >
                        <span class="fullTitle">ArcGIS 001 001 1670</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="16d3cd01-2efb-4d73-a889-10fbe38ae604"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for ArcGIS 001 001 1670 to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="e96eafa9-28f3-4732-8ef9-de2dd0a12fe7"
                      href="javascript:void(0);"
                      title="Add Building Blocks of Ru ... to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/e96eafa9-28f3-4732-8ef9-de2dd0a12fe7"
                        title="Building Blocks of Russian"
                      >
                        <span class="fullTitle">Building Blocks of Ru ...</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="e96eafa9-28f3-4732-8ef9-de2dd0a12fe7"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Building Blocks of Ru ... to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="efaf8d36-3cd4-411e-b43c-fc36862f9291"
                      href="javascript:void(0);"
                      title="Add duke-extend skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/efaf8d36-3cd4-411e-b43c-fc36862f9291"
                        title="duke-extend skin"
                      >
                        <span class="fullTitle">duke-extend skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="efaf8d36-3cd4-411e-b43c-fc36862f9291"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-extend skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="59e2d185-2fec-4f2c-92dc-4fef0cf4de64"
                      href="javascript:void(0);"
                      title="Add Extend Template to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/59e2d185-2fec-4f2c-92dc-4fef0cf4de64"
                        title="Extend Template"
                      >
                        <span class="fullTitle">Extend Template</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="59e2d185-2fec-4f2c-92dc-4fef0cf4de64"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Extend Template to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >QA Test
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="8cb1cc4d-546f-4de4-bc47-f96210c3c521"
                      href="javascript:void(0);"
                      title="Add Box Integration to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/8cb1cc4d-546f-4de4-bc47-f96210c3c521"
                        title="Box Integration"
                      >
                        <span class="fullTitle">Box Integration</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="8cb1cc4d-546f-4de4-bc47-f96210c3c521"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Box Integration to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="fe723945-b567-46de-b222-ea8207220ebc"
                      href="javascript:void(0);"
                      title="Add duke-crtp skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/fe723945-b567-46de-b222-ea8207220ebc"
                        title="duke-crtp skin"
                      >
                        <span class="fullTitle">duke-crtp skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="fe723945-b567-46de-b222-ea8207220ebc"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-crtp skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="cfc12a31-e5ad-4e6d-8dbf-826fc9338042"
                      href="javascript:void(0);"
                      title="Add duke-divinity skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/cfc12a31-e5ad-4e6d-8dbf-826fc9338042"
                        title="duke-divinity skin"
                      >
                        <span class="fullTitle">duke-divinity skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="cfc12a31-e5ad-4e6d-8dbf-826fc9338042"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-divinity skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="157edaeb-ffdb-41a6-852d-4a5b2a9dfc48"
                      href="javascript:void(0);"
                      title="Add duke-dku skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/157edaeb-ffdb-41a6-852d-4a5b2a9dfc48"
                        title="duke-dku skin"
                      >
                        <span class="fullTitle">duke-dku skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="157edaeb-ffdb-41a6-852d-4a5b2a9dfc48"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-dku skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="d48db2d5-f69f-4a02-901f-1064c0a048cc"
                      href="javascript:void(0);"
                      title="Add duke-law skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/d48db2d5-f69f-4a02-901f-1064c0a048cc"
                        title="duke-law skin"
                      >
                        <span class="fullTitle">duke-law skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="d48db2d5-f69f-4a02-901f-1064c0a048cc"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-law skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="71f13e7c-5331-49b3-b446-53352246eb67"
                      href="javascript:void(0);"
                      title="Add duke-nursing skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/71f13e7c-5331-49b3-b446-53352246eb67"
                        title="duke-nursing skin"
                      >
                        <span class="fullTitle">duke-nursing skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="71f13e7c-5331-49b3-b446-53352246eb67"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-nursing skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="0600239a-f22f-4f2d-9708-f051418b9bb8"
                      href="javascript:void(0);"
                      title="Add duke-samsi skin to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/0600239a-f22f-4f2d-9708-f051418b9bb8"
                        title="duke-samsi skin"
                      >
                        <span class="fullTitle">duke-samsi skin</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="0600239a-f22f-4f2d-9708-f051418b9bb8"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for duke-samsi skin to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="2f2aa80a-1b30-4591-bc00-3f154ffdf2d0"
                      href="javascript:void(0);"
                      title="Add DukeHub Integration to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/2f2aa80a-1b30-4591-bc00-3f154ffdf2d0"
                        title="DukeHub Integration"
                      >
                        <span class="fullTitle">DukeHub Integration</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="2f2aa80a-1b30-4591-bc00-3f154ffdf2d0"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for DukeHub Integration to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="5fadd69e-8b79-456c-b727-1f83b138a6be"
                      href="javascript:void(0);"
                      title="Add Gradescope Integration to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/5fadd69e-8b79-456c-b727-1f83b138a6be"
                        title="Gradescope Integration"
                      >
                        <span class="fullTitle">Gradescope Integration</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="5fadd69e-8b79-456c-b727-1f83b138a6be"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Gradescope Integration to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="9abd97a0-0ce5-4079-b125-878f5b92c4af"
                      href="javascript:void(0);"
                      title="Add Joinable to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/9abd97a0-0ce5-4079-b125-878f5b92c4af"
                        title="Joinable"
                      >
                        <span class="fullTitle">Joinable</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="9abd97a0-0ce5-4079-b125-878f5b92c4af"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Joinable to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="08bbc461-0c9e-483f-aafa-3a1a67438958"
                      href="javascript:void(0);"
                      title="Remove MG Test Course from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/08bbc461-0c9e-483f-aafa-3a1a67438958"
                        title="MG Test Course"
                      >
                        <span class="fullTitle">MG Test Course</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="08bbc461-0c9e-483f-aafa-3a1a67438958"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for MG Test Course to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="bcb3a256-f9e6-4fef-abde-c0a700a05024"
                      href="javascript:void(0);"
                      title="Add Plagiarism Tutorial to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/bcb3a256-f9e6-4fef-abde-c0a700a05024"
                        title="Plagiarism Tutorial"
                      >
                        <span class="fullTitle">Plagiarism Tutorial</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="bcb3a256-f9e6-4fef-abde-c0a700a05024"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Plagiarism Tutorial to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="moresites-right-col">
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-favorite"></i></a
                  >OTHER
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <!-- anchor "my workspace" to the top of the list -->
                  <li
                    role="presentation"
                    class="fav-sites-entry is-selected  my-workspace "
                  >
                    <div class="fav-title  fav-title-myworkspace ">
                      <a
                        href="https://sakai.duke.edu/portal/site/%7Ecf21d6cf-62d8-4ed3-b1f1-93a337066e5b"
                        title="Home"
                      >
                        <span class="fa fa-home" aria-hidden="true"></span
                        ><span class="fullTitle">Home</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="~cf21d6cf-62d8-4ed3-b1f1-93a337066e5b"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Home to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>

                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="!admin"
                      href="javascript:void(0);"
                      title="Remove Administration Workspace from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/!admin"
                        title="Administration Workspace"
                      >
                        <span class="fullTitle">Administration Workspace</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="!admin"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Administration Workspace to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fav-sites-term">
                <h3 class="favorites-term-header">
                  <a
                    href="javascript:void(0);"
                    class="favorites-select-all-none"
                    ><i class="site-favorite-icon site-nonfavorite"></i></a
                  >PROJECTS
                </h3>

                <ul class="otherSitesCategorList favoriteSiteList">
                  <!-- anchor "my workspace" to the top of the list -->

                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="a74c83af-e48c-4807-9864-e2fa9ba4c3b2"
                      href="javascript:void(0);"
                      title="Add C &amp; W Sakai Integration to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/a74c83af-e48c-4807-9864-e2fa9ba4c3b2"
                        title="C &amp; W Sakai Integration"
                      >
                        <span class="fullTitle"
                          >C &amp; W Sakai Integration</span
                        >
                      </a>
                    </div>
                    <a
                      href="#"
                      id="a74c83af-e48c-4807-9864-e2fa9ba4c3b2"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for C &amp; W Sakai Integration to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="e700a8f9-ccd3-4e4c-89c1-0913ce812854"
                      href="javascript:void(0);"
                      title="Add Crowdmark Test to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/e700a8f9-ccd3-4e4c-89c1-0913ce812854"
                        title="Crowdmark Test"
                      >
                        <span class="fullTitle">Crowdmark Test</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="e700a8f9-ccd3-4e4c-89c1-0913ce812854"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Crowdmark Test to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="8209c4f4-aa1c-42ff-9826-857ddd167d8f"
                      href="javascript:void(0);"
                      title="Add Distance Ed SIG @ DU to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/8209c4f4-aa1c-42ff-9826-857ddd167d8f"
                        title="Distance Ed SIG @ DU"
                      >
                        <span class="fullTitle">Distance Ed SIG @ DU</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="8209c4f4-aa1c-42ff-9826-857ddd167d8f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Distance Ed SIG @ DU to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="763b76ae-77a2-41e9-8b1f-8a5a2571fdb0"
                      href="javascript:void(0);"
                      title="Add Duke Extend LTI Test to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/763b76ae-77a2-41e9-8b1f-8a5a2571fdb0"
                        title="Duke Extend LTI Test"
                      >
                        <span class="fullTitle">Duke Extend LTI Test</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="763b76ae-77a2-41e9-8b1f-8a5a2571fdb0"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Duke Extend LTI Test to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="288a9b4a-c1f4-41c0-ba7c-bd25ba1fb768"
                      href="javascript:void(0);"
                      title="Add DukeSakaiTeam to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/288a9b4a-c1f4-41c0-ba7c-bd25ba1fb768"
                        title="DukeSakaiTeam"
                      >
                        <span class="fullTitle">DukeSakaiTeam</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="288a9b4a-c1f4-41c0-ba7c-bd25ba1fb768"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for DukeSakaiTeam to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="bd565267-eb73-44b1-8c19-a652712aa694"
                      href="javascript:void(0);"
                      title="Add Faster Better Assessments to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/bd565267-eb73-44b1-8c19-a652712aa694"
                        title="Faster Better Assessments"
                      >
                        <span class="fullTitle">Faster Better Assessments</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="bd565267-eb73-44b1-8c19-a652712aa694"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Faster Better Assessments to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="f345fd2e-235d-4bf9-9372-c350c345430e"
                      href="javascript:void(0);"
                      title="Add MG Test Project to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/f345fd2e-235d-4bf9-9372-c350c345430e"
                        title="MG Test Project"
                      >
                        <span class="fullTitle">MG Test Project</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="f345fd2e-235d-4bf9-9372-c350c345430e"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for MG Test Project to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="cd12be0d-39de-496e-ad02-c4eb9f8febea"
                      href="javascript:void(0);"
                      title="Add morewarpwiretesting to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/cd12be0d-39de-496e-ad02-c4eb9f8febea"
                        title="morewarpwiretesting"
                      >
                        <span class="fullTitle">morewarpwiretesting</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="cd12be0d-39de-496e-ad02-c4eb9f8febea"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for morewarpwiretesting to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="ae37a8be-5852-409c-a6f4-a75dc88509b8"
                      href="javascript:void(0);"
                      title="Add ngdleftw to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/ae37a8be-5852-409c-a6f4-a75dc88509b8"
                        title="ngdleftw"
                      >
                        <span class="fullTitle">ngdleftw</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="ae37a8be-5852-409c-a6f4-a75dc88509b8"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for ngdleftw to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="bdc8640e-0474-4d13-9427-862cd4ee6f6f"
                      href="javascript:void(0);"
                      title="Add Outlook Technical Support to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/bdc8640e-0474-4d13-9427-862cd4ee6f6f"
                        title="Outlook Technical Support"
                      >
                        <span class="fullTitle">Outlook Technical Support</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="bdc8640e-0474-4d13-9427-862cd4ee6f6f"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Outlook Technical Support to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="125ff6a6-82d1-433e-879c-ecff57abb5e1"
                      href="javascript:void(0);"
                      title="Add Peer feedback test site to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/125ff6a6-82d1-433e-879c-ecff57abb5e1"
                        title="Peer feedback test site"
                      >
                        <span class="fullTitle">Peer feedback test site</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="125ff6a6-82d1-433e-879c-ecff57abb5e1"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Peer feedback test site to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="2d61796d-736f-478d-94e5-de5dabae0173"
                      href="javascript:void(0);"
                      title="Add PlayPosit CL to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/2d61796d-736f-478d-94e5-de5dabae0173"
                        title="PlayPosit CL"
                      >
                        <span class="fullTitle">PlayPosit CL</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="2d61796d-736f-478d-94e5-de5dabae0173"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for PlayPosit CL to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="3a3dbf2c-9c43-43ba-87ec-193e4ee32ed7"
                      href="javascript:void(0);"
                      title="Remove Pratt Mediasite Testing from favorites"
                      ><i class="site-favorite-icon site-favorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/3a3dbf2c-9c43-43ba-87ec-193e4ee32ed7"
                        title="Pratt Mediasite Testing"
                      >
                        <span class="fullTitle">Pratt Mediasite Testing</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="3a3dbf2c-9c43-43ba-87ec-193e4ee32ed7"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Pratt Mediasite Testing to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="57116e9d-3dbe-4275-8307-2c9137a1989b"
                      href="javascript:void(0);"
                      title="Add Sakai Gateway to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/57116e9d-3dbe-4275-8307-2c9137a1989b"
                        title="Sakai Gateway"
                      >
                        <span class="fullTitle">Sakai Gateway</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="57116e9d-3dbe-4275-8307-2c9137a1989b"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for Sakai Gateway to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="e273cc3e-de46-4563-b967-e98e2279ec86"
                      href="javascript:void(0);"
                      title="Add UserMembershipTest to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/e273cc3e-de46-4563-b967-e98e2279ec86"
                        title="UserMembershipTest"
                      >
                        <span class="fullTitle">UserMembershipTest</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="e273cc3e-de46-4563-b967-e98e2279ec86"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for UserMembershipTest to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li role="presentation" class="fav-sites-entry  ">
                    <a
                      class="site-favorite-btn"
                      data-site-id="6ab8e31a-6f3e-4b9d-a6fb-363aef0340d0"
                      href="javascript:void(0);"
                      title="Add WW toolkits test to favorites"
                      ><i class="site-favorite-icon site-nonfavorite"></i
                    ></a>

                    <div class="fav-title ">
                      <a
                        href="https://sakai.duke.edu/portal/site/6ab8e31a-6f3e-4b9d-a6fb-363aef0340d0"
                        title="WW toolkits test"
                      >
                        <span class="fullTitle">WW toolkits test</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      id="6ab8e31a-6f3e-4b9d-a6fb-363aef0340d0"
                      class="toolMenus"
                      aria-haspopup="true"
                      aria-label="Open attached menu for WW toolkits test to access its tools"
                    >
                      <span
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sakai-toolbar', SakaiToolbar);
