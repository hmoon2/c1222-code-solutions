var contactForm = document.querySelector('#contact-form');
var firstInputElement = document.querySelector('#user-name');
var secondInputElement = document.querySelector('#user-email');
var textAreaElement = document.querySelector('textarea');

function submitEvent(event) {
  event.preventDefault();
  var firstInputValue = firstInputElement.value;
  var secondInputValue = secondInputElement.value;
  var textAreaValue = textAreaElement.value;
  var object = {};
  object.name = firstInputValue;
  object.email = secondInputValue;
  object.message = textAreaValue;
  console.log('messageData:', object);
  document.querySelector('form').reset();
}

contactForm.addEventListener('submit', submitEvent);
