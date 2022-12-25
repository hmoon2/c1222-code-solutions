/* exported getWords */
/* create a function with one parameter (string)
 inside the function, create an if else statement
 the condition being if the string is empty then the return is the string split at an empty string
 else the return is the string split at every space */

function getWords(string) {
  if (string === '') {
    return string.split('');
  } else {
    return string.split(' ');
  }
}
