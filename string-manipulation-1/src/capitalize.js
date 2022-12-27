/* exported capitalize */
/* create a function
inside the code block, make the first letter of the word uppercase and assign it to a variable (firstLetter)
take the rest of the letters from the word and assign it to a separate variable (restOfLetters)
use the toLowerCase method on restOfLetters variable and assign the value to a new variable (lowerCase)
concatenate the firstLetter variable and the lowerCase variable and return the value out of the function */
function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfLetters = word.slice(1);
  var lowerCase = restOfLetters.toLowerCase();
  return firstLetter + lowerCase;
}
