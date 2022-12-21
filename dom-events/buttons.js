function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var buttonClickMe = document.querySelector('.click-button');

buttonClickMe.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var buttonHoverMe = document.querySelector('.hover-button');

buttonHoverMe.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var buttonDoubleClickMe = document.querySelector('.double-click-button');

buttonDoubleClickMe.addEventListener('dblclick', handleDoubleClick);
