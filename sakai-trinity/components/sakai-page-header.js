import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiPageHeader extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css``;
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
      <div class="sakai-pageHeader">
        <nav class="sakai-breadcrumbs">
          <ul>
            <li><a href="#" class="sakai-breadcrumb">Sakai</a></li>
            <li>
              <a href="#" class="sakai-breadcrumb">CALCULUS 1001 001 SP21</a>
            </li>
            <li>
              <a href="index.html" class="sakai-breadcrumb">Assignments</a>
            </li>
          </ul>
          <h1>Assignment 1 Submissions</h1>
        </nav>
        <div class="sakai-pageOptions">
          <button class="sakai-toolCreationButton">+ Create Assignment</button>
          <select class="sakai-toolOptions">
            <option>Options</option>
            <option>Settings</option>
            <option>Permissions</option>
          </select>
        </div>
      </div>
    `;
  }
}

customElements.define('sakai-page-header', SakaiPageHeader);
