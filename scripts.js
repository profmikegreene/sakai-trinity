// Quick Side Bar

const quickSideBar = document.querySelector('.sakai-quickSideBar');
const portalWrapper = document.querySelector('.sakai-portalWrapper');

if (quickSideBar) {
  quickSideBar.querySelectorAll('.sakai-quickIt').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      portalWrapper.classList.toggle('quickSideBarExpanded');
    });
  });
}
// Tools Menu/Bar

const toolBar = document.querySelector('.sakai-toolBar');
if (toolBar) {
  toolBar.querySelectorAll('.sakai-sitesNav__menuitem').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      item.classList.toggle('is-expanded');
    });
  });
}

// Table Actions

const exampleTable = document.querySelector('.sakai-table');
const tableActions = document.querySelector('.sakai-table-actionsBar');
const selectedCounter = document.querySelector(
  '.sakai-table-actionsBar-selected > span'
);
const selectAllTableItems = exampleTable.querySelector(
  'th.sakai-table-selectItem > input[type="checkbox"]'
);
const allTableItems = exampleTable.querySelectorAll(
  'td.sakai-table-selectItem > input[type="checkbox"]'
);
const tableActionsClose = tableActions.querySelector(
  '.sakai-table-actionsBar-cancel'
);
var selectedItems = new Set();

allTableItems.forEach(checkedItem => {
  checkedItem.addEventListener('change', function () {
    if (this.checked) {
      if (selectedItems.size < 1) {
        tableActions.classList.add('enabled');
      }
      selectedItems.add(this);
      selectedCounter.innerText = selectedItems.size;
    } else {
      selectedItems.delete(this);
      selectedCounter.innerText = selectedItems.size;
      if (selectedItems.size == 0) {
        tableActions.classList.remove('enabled');
      }
      selectAllTableItems.checked = false;
    }
  });
});

function checkAllTableItems(checkedState) {
  allTableItems.forEach(tableItem => {
    tableItem.checked = checkedState;
    if (checkedState) {
      // check all boxes:
      selectedItems.add(tableItem);
      selectedCounter.innerText = selectedItems.size;
      tableActions.classList.add('enabled');
    }
  });

  if (!checkedState) {
    selectedItems = new Set();
    tableActions.classList.remove('enabled');
  }
}

selectAllTableItems.addEventListener('change', function () {
  if (this.checked) {
    checkAllTableItems(true);
  } else {
    checkAllTableItems(false);
  }
});

tableActionsClose.addEventListener('click', function () {
  event.preventDefault();
  checkAllTableItems(false);
  selectAllTableItems.checked = false;
});
