var $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  if ($countdownDisplay.textContent > 1) {
    $countdownDisplay.textContent--;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1000);
