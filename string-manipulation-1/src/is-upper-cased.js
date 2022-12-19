/* exported isUpperCased */
/* create a function
inside the function code block, assign the boolean true to a variable (wordIs)
then create a for loop. Initialize with a variable equal to 0
then have i be less than the length of the word and have i be incremented
in the loop, if a letter can be changed to uppercase, if it can assign false to the variable wordIs
return the value of the variable wordIs */
function isUpperCased(word) {
  var wordIs = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase) {
      wordIs = false;
    }
  }
  return wordIs;
}
