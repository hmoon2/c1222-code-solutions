/* exported capitalizeWord */
/* create a function with one parameter (word)
inside the function create a variable with an empty string as its value
then with a for loop iterate through the word characters, if the character is the first letter
then capitalize it, if it's not the first letter then lowercase them
then if the word after it's been capitalized/lowercased, if the word is 'Javascript' then
have the function return 'JavaScript'. If the word is not 'Javascript' then have the function
return the word with only the first letter capitalized */

function capitalizeWord(word) {
  var firstLetterCapitalized = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      firstLetterCapitalized += word[0].toUpperCase();
    } else if (word[i] !== word[0]) {
      firstLetterCapitalized += word[i].toLowerCase();
    }
  }
  if (firstLetterCapitalized === 'Javascript') {
    return 'JavaScript';
  } else {
    return firstLetterCapitalized;
  }
}
