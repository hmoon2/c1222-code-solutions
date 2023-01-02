/* exported truncate */
/* create a function with two parameters (length, string)
in the function, create a variable with an empty string as its value
then create an if statement with the condition being if the length parameter is less than the string's length
then use a for loop to iterate through the string, using an if statement to check that as long as i is
less than the length parameter then the character at i will be concatenated to the empty string variable
once i is no longer less than the length parameter then the variable concatenated with '...' will be returned
out of the function
however (else) if the length parameter is less than the string's length then the return will just be the entire
string concatenated with '...' */
function truncate(length, string) {
  var shortenedStr = '';
  if (length < string.length) {
    for (var i = 0; i < length; i++) {
      if (i < length) {
        shortenedStr += string[i];
      }
    }
    return shortenedStr + '...';
  } else if (length > string.length) {
    return string + '...';
  }
}
