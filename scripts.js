const quickSideBar = document.querySelector('.Mrphs-quickSideBar');
const portalWrapper = document.querySelector('.Mrphs-portalWrapper');

quickSideBar.querySelectorAll('.Mrphs-quickIt').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		portalWrapper.classList.toggle("quickSideBarExpanded");
	})
})

const toolBar = document.querySelector('.Mrphs-toolBar');
toolBar.querySelectorAll('.Mrphs-sitesNav__menuitem').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		item.classList.toggle("is-expanded");
	})
})