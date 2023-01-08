/* exported lastChars */
/* create a function with two parameters (length, string)
then create a variable with an empty string in the function which will hold the last characters from the string
then create a for loop, have the starting point at the character that is the value of length away from the end of the string
in the for loop, create an if statement where if the value of length is larger than the length of the string, then just return the string
but if the length is less than the string then concatenate the string at the i index to the empty string
return the value of the concatenated empty string  */

function lastChars(length, string) {
  var lastCharsString = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (length > string.length) {
      return string;
    } else {
      lastCharsString += string[i];
    }
  }
  return lastCharsString;
}
