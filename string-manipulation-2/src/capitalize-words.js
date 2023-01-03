/* exported capitalizeWords */
/* create a function with one parameter (string)
in the function create a variable with an empty string as a value, it will hold the new string with all the words capitalized
create another variable where the value is an array of the words from the string (use split method, separating between every space)
then create a for loop to iterate through the array created from the given string
in the for loop, create a variable that holds all the characters, except the first character, from the word (using substring method)
then create a variable that capitalizes the first character (using toUpperCase method), lowercases the rest of the characters (using toLowerCase method),
and adds thenm both together. In the for loop, create an if statement. If the word is the first item of the array, then it will be concatenated to the empty string
anything besides the first word will be concatenated with a space and the word
the variable with the formerly empty string value will be returned out of the function */

function capitalizeWords(string) {
  var everyWordCapitalized = '';
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    var wordSubstring = words[i].substring(1);
    var eachWord = words[i][0].toUpperCase() + wordSubstring.toLowerCase();
    if (eachWord[i] === eachWord[0]) {
      everyWordCapitalized += eachWord;
    } else {
      everyWordCapitalized += ' ' + eachWord;
    }
  }
  return everyWordCapitalized;
}
