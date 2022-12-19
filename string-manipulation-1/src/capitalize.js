/* exported capitalize */
/* create a function
inside the code block, return word at index 0 and use the toUpperCase method
then concatenate the letters that aren't capital with the slice method */
function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfLetters = word.slice(1);
  var lowerCase = restOfLetters.toLowerCase();
  return firstLetter + lowerCase;
}
