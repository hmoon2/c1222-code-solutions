/* exported isLowerCased */
/* create a function that checks if the string is all lowercased
the function will have one parameter (word)
create an if statement, with the condition being:
if the parameter is converted to all lowercase and equals itself then the return will be boolean true
else the return will be boolean false */

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
