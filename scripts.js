const quickSideBar = document.querySelector('.Mrphs-quickSideBar');
const portalWrapper = document.querySelector('.Mrphs-portalWrapper');
/*const qsbSites = quickSideBar.querySelector('.Mrphs-qsb-sites');
const qsbTasks = quickSideBar.querySelector('.Mrphs-qsb-tasks');
const qsbGrades = quickSideBar.querySelector('.Mrphs-qsb-grades');
const qsbCalendar = quickSideBar.querySelector('.Mrphs-qsb-calendar');
const qsbConnections = quickSideBar.querySelector('.Mrphs-qsb-connections');

qsbSites.addEventListener('click',toggleQuickSideBar(event));
qsbTasks.addEventListener('click',toggleQuickSideBar(event));
qsbGrades.addEventListener('click',toggleQuickSideBar(event));
qsbCalendar.addEventListener('click',toggleQuickSideBar(event));
qsbConnections.addEventListener('click',toggleQuickSideBar(event));

function toggleQuickSideBar(event) {
	alert('toggle!');
}*/

quickSideBar.querySelectorAll('.Mrphs-quickIt').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		portalWrapper.classList.toggle("quickSideBarExpanded");
	})
})