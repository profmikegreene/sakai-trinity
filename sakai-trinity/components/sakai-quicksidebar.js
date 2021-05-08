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
      .sakai-quickSideBar {
        grid-area: sidebar;
        display: flex;
        border-left: 1px solid #eee;
        transition: width 200ms ease-in;
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
    console.log(this.baseURI);
    const portalWrapper = document.querySelector('.sakai-portalWrapper');
    portalWrapper.classList.toggle('quickSideBarExpanded');
    this.shadowRoot
      .getElementById('sakai-quickSideBar')
      .classList.toggle('isExpanded');
  }
  render() {
    return html`
      <div id="sakai-quickSideBar" class="sakai-quickSideBar">
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
