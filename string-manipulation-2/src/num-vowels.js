/* exported numVowels */
/* create a function with one parameter (string)
in the function, create a variable that has the value zero (it will hold the number of vowels in the string)
then create a variable with the value of a string that contains all the vowels in upper and lowercase without any spaces
next create a for loop that will iterate through the characters in the string
in the for loop, create another for loop that will iterate through the vowels variable, and in that for loop create an if statement
if the character from the string is the same as one of the characters from the vowels string, then increment the variable that
started with the value of zero
the return will be the value of the variable that held the number of vowels in the string */

function numVowels(string) {
  var numberOfVowels = 0;
  var vowels = 'AaEeIiOoUu';
  for (var i = 0; i < string.length; i++) {
    for (var m = 0; m < vowels.length; m++) {
      if (vowels[m] === string[i]) {
        numberOfVowels++;
      }
    }
  }
  return numberOfVowels;
}
