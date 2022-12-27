var taskList = document.querySelector('.task-list');

function clickTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var taskListItemParent = event.target.closest('.task-list-item');
    console.log(taskListItemParent);
    taskListItemParent.remove();
  }
}

taskList.addEventListener('click', clickTaskList);
