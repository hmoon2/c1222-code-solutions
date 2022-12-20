var contactForm = document.querySelector('#contact-form');

function submitEvent(event) {
  event.preventDefault();
  var firstInputValue = contactForm.elements.name.value;
  var secondInputValue = contactForm.elements.email.value;
  var textAreaValue = contactForm.elements.message.value;
  var object = {};
  object.name = firstInputValue;
  object.email = secondInputValue;
  object.message = textAreaValue;
  console.log('messageData:', object);
  contactForm.reset();
}

contactForm.addEventListener('submit', submitEvent);
