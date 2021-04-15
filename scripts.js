const quickSideBar = document.querySelector('.sakai-quickSideBar');
const portalWrapper = document.querySelector('.sakai-portalWrapper');

quickSideBar.querySelectorAll('.sakai-quickIt').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		portalWrapper.classList.toggle("quickSideBarExpanded");
	})
})

const toolBar = document.querySelector('.sakai-toolBar');
toolBar.querySelectorAll('.sakai-sitesNav__menuitem').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		item.classList.toggle("is-expanded");
	})
})
