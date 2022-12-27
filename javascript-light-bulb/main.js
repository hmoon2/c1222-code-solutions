var numberOfClicks = 0;
var sky = document.querySelector('.day-time');
var lightBulb = document.querySelector('.light-on');

function lightSwitch(event) {
  numberOfClicks++;
  if (numberOfClicks % 2 === 0) {
    sky.className = 'day-time';
    lightBulb.className = 'light-on circle';
  } else {
    sky.className = 'night-time';
    lightBulb.className = 'light-off circle';
  }
}

lightBulb.addEventListener('click', lightSwitch);
