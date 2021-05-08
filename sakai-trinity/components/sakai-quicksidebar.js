import { LitElement, html } from 'lit-element';

export class SakaiQuickSidebar extends LitElement {
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
      <div class="sakai-quickSideBar">
        <ul>
          <li>
            <a href="#" class="sakai-quickIt sakai-qsb-sites"
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
