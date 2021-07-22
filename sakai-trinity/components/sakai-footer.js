import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

export class SakaiFooter extends LitElement {
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
      <link href="../components/sakai-footer.css" rel="stylesheet" type="text/css"> 
      <div class="sakai-footer">
        <ul class="sakai-footer--nav">
          <li>
            <span><a href="#">Gateway</a></span>
          </li>
          <li>
            <span><a href="#">Accessibility Information</a></span>
          </li>
          <li>
            <span
              ><a href="https://www.sakailms.org/" target="_blank"
                >The Sakai Project</a
              ></span
            >
          </li>
        </ul>
        <p class="sakai-footer--copyright">
          Copyright 2003-2021 The Apereo Foundation. All rights reserved.
        </p>
      </div>
    `;
  }
}

customElements.define('sakai-footer', SakaiFooter);
