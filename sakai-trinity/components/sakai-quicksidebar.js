import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

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
        <ul class="userNav" role="menu">
          <li class="Mrphs-userNav__submenuitem Mrphs-userData">
            <div class="Mrphs-userNav__submenuitem--profile-and-image">
              <div class="has-avatar">
              
            <a
              href="#"
              class="sakai-headerItem sak-sysInd-account"
              @click=${this._toggleQuickSideBar}
              ><img
                src="../images/profile02.jpg"
                title="My Account"
              />Account</a
            >
          
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
        <ul id="widgets">

          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-tasks"
              ><img src="../icons/calendar-outline.svg" title="Tasks" />Tasks</a
            >
            <div id="container">
        <div id="title-bar">
          <div id="title"><!---->Tasks<!----></div>
          
        </div>
        <div id="content"><!---->
        <div id="container">
      <div id="add-block">
        <lion-dialog id="add-edit-dialog">

          

          <div slot="invoker" aria-expanded="false"><a href="javascript:;" title="Add a new task" aria-label="Add a new task"><sakai-icon type="add" size="small"></sakai-icon></a></div>

        </lion-dialog>
      </div>
      <div id="controls">
        <div id="filter">
          <select>
            <option value="current"><!---->All Current<!----></option>
            <option value="priority_5"><!---->Priority: 5<!----></option>
            <option value="priority_4"><!---->Priority: 4<!----></option>
            <option value="priority_3"><!---->Priority: 3<!----></option>
            <option value="priority_2"><!---->Priority: 2<!----></option>
            <option value="priority_1"><!---->Priority: 1<!----></option>
            <option value="overdue"><!---->Overdue<!----></option>
            <option value="trash"><!---->Trash<!----></option>
            <option value="complete"><!---->Completed<!----></option>
          </select>
        </div>
        <div id="sort">
          <select>
            <option value="none"><!---->Sort<!----></option>
            <option value="due_latest_first"><!---->Due: Latest First<!----></option>
            <option value="due_earliest_first"><!---->Due: Earliest First<!----></option>
            <option value="priority_lowest_first"><!---->Priority: Lowest First<!----></option>
            <option value="priority_highest_first"><!---->Priority: Highest First<!----></option>
          </select>
        </div>
      </div>
      
        <div id="tasks">
          <div class="priority-block header"><!---->Priority<!----></div>
          <div class="task-block task-block-header header"><!---->Task<!----></div>
          <div class="link-block header"><!---->Options<!----></div>
        <!---->
          <div class="priority-block priority_5 cell even">
            <div tabindex="0" title="High (5) priority" aria-label="High (5) priority">
              <sakai-icon size="small" type="priority">
            </sakai-icon></div>
          </div>
          <div class="task-block cell even">
            <div class="site-title"><!---->CMKL_807G_4344<!----></div>
            <div class="description"><!---->sakai grader<!----></div>
            <div class="due-date"><span class="due"><!---->Date Due: </span>3 months ago<!----></div>
            
          </div>
          <div class="link-block cell even">
            <div class="edit">
              <a href="javascript:;" data-task-id="1" title="Edit this task" aria-label="Edit this task">
                <sakai-icon type="edit" size="small"></sakai-icon>
              </a>
            </div>
            
              <div class="delete">
                <a href="javascript:;" data-task-id="1" title="Send this task to the trash. You'll be able to restore it under the 'trash' filter" aria-label="Send this task to the trash. You'll be able to restore it under the 'trash' filter">
                  <sakai-icon type="delete" size="small"></sakai-icon>
                </a>
              </div>
            
            <div>
              
                <div>
                  <a href="http://sakai.localhost/portal/directtool/a105f291-ece9-482d-814d-152c8b1d5351?assignmentId=/assignment/a/CMKL_807G_4344/b93d2193-98d2-41ec-9083-5ff3a46cac1a&amp;panel=Main&amp;sakai_action=doGrade_assignment" title="Click to be taken to the task" aria-label="Click to be taken to the task">
                    <sakai-icon type="right" size="small"></sakai-icon>
                  </a>
                </div>
              
            </div>
          </div>
        <!---->
          <div class="priority-block priority_5 cell odd">
            <div tabindex="0" title="High (5) priority" aria-label="High (5) priority">
              <sakai-icon size="small" type="priority">
            </sakai-icon></div>
          </div>
          <div class="task-block cell odd">
            <div class="site-title"><!---->CMKL_807G_4344<!----></div>
            <div class="description"><!---->grader + rubrics<!----></div>
            <div class="due-date"><span class="due"><!---->Date Due: </span>3 months ago<!----></div>
            
          </div>
          <div class="link-block cell odd">
            <div class="edit">
              <a href="javascript:;" data-task-id="2" title="Edit this task" aria-label="Edit this task">
                <sakai-icon type="edit" size="small"></sakai-icon>
              </a>
            </div>
            
              <div class="delete">
                <a href="javascript:;" data-task-id="2" title="Send this task to the trash. You'll be able to restore it under the 'trash' filter" aria-label="Send this task to the trash. You'll be able to restore it under the 'trash' filter">
                  <sakai-icon type="delete" size="small"></sakai-icon>
                </a>
              </div>
            
            <div>
              
                <div>
                  <a href="http://sakai.localhost/portal/directtool/a105f291-ece9-482d-814d-152c8b1d5351?assignmentId=/assignment/a/CMKL_807G_4344/33231b37-8c40-465a-bf0f-b6b85d5a196d&amp;panel=Main&amp;sakai_action=doGrade_assignment" title="Click to be taken to the task" aria-label="Click to be taken to the task">
                    <sakai-icon type="right" size="small"></sakai-icon>
                  </a>
                </div>
              
            </div>
          </div>
        <!---->
          <div class="priority-block priority_5 cell even">
            <div tabindex="0" title="High (5) priority" aria-label="High (5) priority">
              <sakai-icon size="small" type="priority">
            </sakai-icon></div>
          </div>
          <div class="task-block cell even">
            <div class="site-title"><!---->CMKL_807G_4344<!----></div>
            <div class="description"><!---->unavailable<!----></div>
            <div class="due-date"><span class="due"><!---->Date Due: </span>3 months ago<!----></div>
            
          </div>
          <div class="link-block cell even">
            <div class="edit">
              <a href="javascript:;" data-task-id="3" title="Edit this task" aria-label="Edit this task">
                <sakai-icon type="edit" size="small"></sakai-icon>
              </a>
            </div>
            
              <div class="delete">
                <a href="javascript:;" data-task-id="3" title="Send this task to the trash. You'll be able to restore it under the 'trash' filter" aria-label="Send this task to the trash. You'll be able to restore it under the 'trash' filter">
                  <sakai-icon type="delete" size="small"></sakai-icon>
                </a>
              </div>
            
            <div>
              
                <div>
                  <a href="http://sakai.localhost/portal/directtool/a105f291-ece9-482d-814d-152c8b1d5351?assignmentId=/assignment/a/CMKL_807G_4344/51a116dd-4e71-477c-ad70-0c5a4c3c7d68&amp;panel=Main&amp;sakai_action=doGrade_assignment" title="Click to be taken to the task" aria-label="Click to be taken to the task">
                    <sakai-icon type="right" size="small"></sakai-icon>
                  </a>
                </div>
              
            </div>
          </div>
        <!---->
          <div class="priority-block priority_5 cell odd">
            <div tabindex="0" title="High (5) priority" aria-label="High (5) priority">
              <sakai-icon size="small" type="priority">
            </sakai-icon></div>
          </div>
          <div class="task-block cell odd">
            <div class="site-title"><!---->CMKL_807G_4344<!----></div>
            <div class="description"><!---->asdf4<!----></div>
            <div class="due-date"><span class="due"><!---->Date Due: </span>in a month<!----></div>
            
          </div>
          <div class="link-block cell odd">
            <div class="edit">
              <a href="javascript:;" data-task-id="5" title="Edit this task" aria-label="Edit this task">
                <sakai-icon type="edit" size="small"></sakai-icon>
              </a>
            </div>
            
              <div class="delete">
                <a href="javascript:;" data-task-id="5" title="Send this task to the trash. You'll be able to restore it under the 'trash' filter" aria-label="Send this task to the trash. You'll be able to restore it under the 'trash' filter">
                  <sakai-icon type="delete" size="small"></sakai-icon>
                </a>
              </div>
            
            <div>
              
                <div>
                  <a href="http://sakai.localhost/portal/directtool/a105f291-ece9-482d-814d-152c8b1d5351?assignmentId=/assignment/a/CMKL_807G_4344/f4f5d40b-2b7f-41cf-bdd5-e712a13fba87&amp;panel=Main&amp;sakai_action=doGrade_assignment" title="Click to be taken to the task" aria-label="Click to be taken to the task">
                    <sakai-icon type="right" size="small"></sakai-icon>
                  </a>
                </div>
              
            </div>
          </div>
        <!---->
        </div>
      
      </div><!----></div>
      </div>
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
            <div id="container">
        <div id="title-bar">
          <div id="title"><!---->Calendar<!----></div>
          
        </div>
        <div id="content"><!---->
        <div id="container">
        <lion-dialog id="display-dialog">
          
          <button slot="invoker" style="display: none" aria-expanded="false">none</button>
        </lion-dialog>
        
        
      <div class="calendar" role="application">
        
      <div class="calendar__header">
        
      <button class="calendar__previous-month-button" aria-label="Previous month, April 2021" title="Previous month, April 2021">
        &lt;
      </button>
    
        <h2 class="calendar__month-heading" id="month_and_year" aria-atomic="true">
          May 2021
        </h2>
        
      <button class="calendar__next-month-button" aria-label="Next month, June 2021" title="Next month, June 2021">
        &gt;
      </button>
    
      </div>
     
    <div id="js-content-wrapper">
      <!---->
          <table role="grid" data-wrap-cols="" aria-readonly="true" class="calendar__grid" aria-labelledby="month_and_year">
            <thead>
              <tr role="row">
                <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Sunday">
                      Sun
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Monday">
                      Mon
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Tuesday">
                      Tue
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Wednesday">
                      Wed
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Thursday">
                      Thu
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Friday">
                      Fri
                    </th>
                  <!---->
                    <th role="columnheader" class="calendar__weekday-header" scope="col" aria-label="Saturday">
                      Sat
                    </th>
                  <!---->
              </tr>
            </thead>
            <tbody>
              <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="25 April 2021 Sunday" aria-pressed="false" past="" previous-month="">
        25
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="26 April 2021 Monday" aria-pressed="false" past="" previous-month="">
        26
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="27 April 2021 Tuesday" aria-pressed="false" past="" previous-month="">
        27
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="28 April 2021 Wednesday" aria-pressed="false" past="" previous-month="">
        28
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="29 April 2021 Thursday" aria-pressed="false" past="" previous-month="">
        29
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="30 April 2021 Friday" aria-pressed="false" past="" previous-month="">
        30
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="1 May 2021 Saturday" aria-pressed="false" past="" current-month="">
        1
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="2 May 2021 Sunday" aria-pressed="false" past="" current-month="">
        2
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="3 May 2021 Monday" aria-pressed="false" past="" current-month="">
        3
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="4 May 2021 Tuesday" aria-pressed="false" past="" current-month="">
        4
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="5 May 2021 Wednesday" aria-pressed="false" past="" current-month="">
        5
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="6 May 2021 Thursday" aria-pressed="false" past="" current-month="">
        6
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="7 May 2021 Friday" aria-pressed="false" past="" current-month="">
        7
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="8 May 2021 Saturday" aria-pressed="false" past="" current-month="">
        8
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="0" aria-label="9 May 2021 Sunday" aria-pressed="false" aria-current="date" today="" current-month="">
        9
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="10 May 2021 Monday" aria-pressed="false" future="" current-month="">
        10
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="11 May 2021 Tuesday" aria-pressed="false" future="" current-month="">
        11
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="12 May 2021 Wednesday" aria-pressed="false" future="" current-month="">
        12
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="13 May 2021 Thursday" aria-pressed="false" future="" current-month="">
        13
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="14 May 2021 Friday" aria-pressed="false" future="" current-month="">
        14
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="15 May 2021 Saturday" aria-pressed="false" future="" current-month="">
        15
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="16 May 2021 Sunday" aria-pressed="false" future="" current-month="">
        16
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="17 May 2021 Monday" aria-pressed="false" future="" current-month="">
        17
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="18 May 2021 Tuesday" aria-pressed="false" future="" current-month="">
        18
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="19 May 2021 Wednesday" aria-pressed="false" future="" current-month="">
        19
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="20 May 2021 Thursday" aria-pressed="false" future="" current-month="">
        20
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="21 May 2021 Friday" aria-pressed="false" future="" current-month="">
        21
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="22 May 2021 Saturday" aria-pressed="false" future="" current-month="">
        22
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="23 May 2021 Sunday" aria-pressed="false" future="" current-month="">
        23
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="24 May 2021 Monday" aria-pressed="false" future="" current-month="">
        24
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="25 May 2021 Tuesday" aria-pressed="false" future="" current-month="">
        25
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="26 May 2021 Wednesday" aria-pressed="false" future="" current-month="">
        26
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="27 May 2021 Thursday" aria-pressed="false" future="" current-month="">
        27
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="28 May 2021 Friday" aria-pressed="false" future="" current-month="">
        28
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="29 May 2021 Saturday" aria-pressed="false" future="" current-month="">
        29
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
                  <tr role="row">
                    <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="30 May 2021 Sunday" aria-pressed="false" future="" current-month="">
        30
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="31 May 2021 Monday" aria-pressed="false" future="" current-month="">
        31
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="1 June 2021 Tuesday" aria-pressed="false" future="" next-month="">
        1
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="2 June 2021 Wednesday" aria-pressed="false" future="" next-month="">
        2
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="3 June 2021 Thursday" aria-pressed="false" future="" next-month="">
        3
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="4 June 2021 Friday" aria-pressed="false" future="" next-month="">
        4
      </button>
    </td>
  <!---->
    <td role="gridcell" class="calendar__day-cell">
      <button class="calendar__day-button" tabindex="-1" aria-label="5 June 2021 Saturday" aria-pressed="false" future="" next-month="">
        5
      </button>
    </td>
  <!---->
                  </tr>
                <!---->
            </tbody>
          </table>
        <!---->
    </div>
  
      </div>
    
        
      </div>
    <!----></div>
      </div>
          </li>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-connections"
              ><img
                src="../icons/people-outline.svg"
                title="Connections"
              />Connections</a
            >
          </li>
          <li>
          <a href="#" class="sakai-quickIt sakai-qsb-announcements"
              ><ion-icon name="megaphone-outline" size="large">Announcements</ion-icon></a
            >
          <div id="container">
        <div id="title-bar">
          <div id="title"><!---->Announcements<!----></div>
          
        </div>
        <div id="content"><!---->
      <div id="topbar">
        
        <div id="search">
          <input type="text" placeholder="Search">
        </div>
      </div>
      <div id="viewing"><!---->(viewing announcements from the last 10 days)<!----></div>
      <div class="announcements course">
        <div class="header"><a href="javascript:;" title="Sort by title"><!---->Title<!----></a></div>
        
        <div class="header"><!---->View<!----></div>
      <!---->
        <div class="title cell even"><!---->color scheme<!----></div>
        
        <div class="url cell even"><a href="http://sakai.localhost/portal/directtool/e1d53ba7-4ad8-45f5-ad62-961a5a0c8302?itemReference=/announcement/msg/CMKL_807G_4344/main/4343d526-dfb5-4a96-b65d-ee7904bb079f&amp;sakai_action=doShowmetadata"><sakai-icon class="view-item" type="right" size="small"></sakai-icon></a></div>
      <!---->
        <div class="title cell odd"><!---->draft<!----></div>
        
        <div class="url cell odd"><a href="http://sakai.localhost/portal/directtool/e1d53ba7-4ad8-45f5-ad62-961a5a0c8302?itemReference=/announcement/msg/CMKL_807G_4344/main/957b217c-85e4-484d-b54a-332dfe58f03f&amp;sakai_action=doShowmetadata"><sakai-icon class="view-item" type="right" size="small"></sakai-icon></a></div>
      <!---->
      </div>
    <!----></div>
      </div>
          </li>
        </ul>
        
      </div>
    `;
  }
}

customElements.define('sakai-quick-sidebar', SakaiQuickSidebar);
