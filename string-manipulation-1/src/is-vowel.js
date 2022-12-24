/* exported isVowel */
/* create a function that checks if a string character is a vowel or consonant
the function will have one parameter (character)
create a variable (vowels) that is assigned an array [a, e, i, o ,u, A, E, I, O, U]
create a second variable (isAVowel) that equals false
create a for loop (initialize variable (i) to zero; i is less than the length of vowels; increment i)
inside the for loop create an if statement where the condition is
if the character is equal to an item in the array then isAVowel will be true
return isAVowel out of the function */

function isVowel(character) {
  var vowels = 'aeiouAEIOU';
  var isAVowel = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === character) {
      isAVowel = true;
    }
  }
  return isAVowel;
}
