/* exported firstChars */
/* create a function with two parameters (length, string)
in the function, create a variable with an empty string
then create a for loop to iterate through the string, and in the for loop, create an if statement
if the index number is less than that of the length number then the value at that index will be
concatenated with the empty string
the variable with the value of the new string will be returned */

function firstChars(length, string) {
  var firstCharsString = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      firstCharsString += string[i];
    }
  }
  return firstCharsString;
}
