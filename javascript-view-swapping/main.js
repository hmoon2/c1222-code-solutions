var classTabContainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
// var viewNodeList = document.querySelectorAll('.view');

function switchTabs(event) {
  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < tabNodeList.length; i++) {
      if (i === event.target) {
        tabNodeList[i].className = 'tab active';
      } else {
        tabNodeList[i].className = 'tab';
      }
    }
  }
}

classTabContainer.addEventListener('click', switchTabs);

// console.log(tabNodeList);
