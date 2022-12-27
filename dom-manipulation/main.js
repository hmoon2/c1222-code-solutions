/* First, declare three variables. One for the number of times a user clicks the button, a second for the querySelector
for the hot-button class, and a third for the querySelector for the click-count class.
Create a function that will be used in the addEventListener method.
In the function, when the 'click' event is fired, the variable that keeps track of the number of clicks will be incremented.
Next the text for the class 'click-count' needs to be updated whenever the event fires.
Assign a string concatenated with the variable for number of clicks to the text content property of the 'click-count' class node
Then create an else if statement that updates the class name in the html and changes the color of the button depending on how many times it's clicked
Lastly, create an event listener for the button element. With the event 'click' as one argument and the function that was created as the second */

var numberOfClicks = 0;
var clickHotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function hotButton(event) {
  numberOfClicks++;
  clickCount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks <= 4) {
    clickHotButton.className = 'hot-button cold';
  } else if (numberOfClicks <= 7) {
    clickHotButton.className = 'hot-button cool';
  } else if (numberOfClicks <= 10) {
    clickHotButton.className = 'hot-button tepid';
  } else if (numberOfClicks <= 13) {
    clickHotButton.className = 'hot-button warm';
  } else if (numberOfClicks <= 16) {
    clickHotButton.className = 'hot-button hot';
  } else if (numberOfClicks > 16) {
    clickHotButton.className = 'hot-button nuclear';
  }
}

clickHotButton.addEventListener('click', hotButton);
