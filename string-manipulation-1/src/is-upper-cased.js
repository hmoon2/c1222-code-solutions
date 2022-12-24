/* exported isUpperCased */
/* create a function
inside the function code block create an if statement
the condition being change the string to be all uppercased and have it compared to itself
if the condition is met return true
else return false */

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
