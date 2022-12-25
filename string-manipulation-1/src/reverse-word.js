/* exported reverseWord */
/* create a function with one parameter (word)
In the function create a variable with an empty string as its value (newWord)
Create a for loop. With each iteration, take the last letter of the word and concatenate it with the empty string
Return newWord
 */

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
