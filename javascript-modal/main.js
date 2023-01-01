var $openButton = document.querySelector('.purple');
var $modal = document.querySelector('#modal');
var $noButton = document.querySelector('.salmon');

function openModal(event) {
  if (event.target) {
    $modal.className = '';
  }
}

$openButton.addEventListener('click', openModal);

function closeModal(event) {
  if (event.target) {
    $modal.className = 'hide';
  }
}

$noButton.addEventListener('click', closeModal);
