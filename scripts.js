const quickSideBar = document.querySelector('.sakai-quickSideBar');
const portalWrapper = document.querySelector('.sakai-portalWrapper');

quickSideBar.querySelectorAll('.sakai-quickIt').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		portalWrapper.classList.toggle("quickSideBarExpanded");
	})
})
