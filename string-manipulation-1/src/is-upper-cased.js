/* exported isUpperCased */
/* create a function
inside the function code block, create a variable without a value (wordIsUpperCased)
then create a for loop. Initialize with a variable equal to 0; have i be less than the length of the word; have i be incremented
in the loop, change the string to be all uppercased and have it compared to itself
if the condition returns true then it means that the string is all uppercased
if the condition returns false then it means that the string is not all uppercased
have the variable wordIsUpperCased returned out of the function */
function isUpperCased(word) {
  var wordIsUpperCased;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      wordIsUpperCased = true;
    } else if (word[i].toUpperCase() !== word[i]) {
      wordIsUpperCased = false;
    }
  }
  return wordIsUpperCased;
}
