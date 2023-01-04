var $message = document.querySelector('.message');

function newMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(newMessage, 2000);
