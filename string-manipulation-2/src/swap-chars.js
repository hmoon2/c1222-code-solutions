/* exported swapChars */
/* create a function with three parameters (firstIndex, secondIndex, string)
in the function, create a variable with an empty string as its value
then create a for loop that will iterate through the string
in the for loop, create an if statement
if i is strictly equal to the firstIndex, then the character at the second index of the string will get
concatenated with the empty string variable
if i is strictly equal to the secondIndex, then the character at the first Index of the string will get
concatenated with the empty string variable
if i is strictly equal to any of the other indexes, then the character at i will be concatenated with
the empty string variable
the return will be the empty string variable */

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharsString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedCharsString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedCharsString += string[firstIndex];
    } else {
      swappedCharsString += string[i];
    }
  }
  return swappedCharsString;
}
