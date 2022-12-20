function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var firstInputElement = document.querySelector('#user-name');
var secondInputElement = document.querySelector('#user-email');
var textAreaElement = document.querySelector('textarea');

firstInputElement.addEventListener('focus', handleFocus);
firstInputElement.addEventListener('blur', handleBlur);
firstInputElement.addEventListener('input', handleInput);

secondInputElement.addEventListener('focus', handleFocus);
secondInputElement.addEventListener('blur', handleBlur);
secondInputElement.addEventListener('input', handleInput);

textAreaElement.addEventListener('focus', handleFocus);
textAreaElement.addEventListener('blur', handleBlur);
textAreaElement.addEventListener('input', handleInput);
