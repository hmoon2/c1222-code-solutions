var classTabContainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');

function switchTabs(event) {
  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < tabNodeList.length; i++) {
      if (tabNodeList[i] === event.target) {
        tabNodeList[i].className = 'tab active';
      } else {
        tabNodeList[i].className = 'tab';
      }
    }
    var dataViewValue = event.target.getAttribute('data-view');
    for (var m = 0; m < viewNodeList.length; m++) {
      if (viewNodeList[m].getAttribute('data-view') === dataViewValue) {
        viewNodeList[m].className = 'view';
      } else {
        viewNodeList[m].className = 'view hidden';
      }
    }
  }
}

classTabContainer.addEventListener('click', switchTabs);
