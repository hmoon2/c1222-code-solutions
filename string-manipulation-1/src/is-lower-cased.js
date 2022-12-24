/* exported isLowerCased */
/* create a function that checks if the string is all lowercased, If it is have it return true, if it isn't then return false
the function will have one parameter (word)
inside the function create a variable (wordIsLowerCased) without a value
then create a for loop (initialize variable (i) equal to zero; have i be less than the parameter's length; have i increment by one
inside the for loop create an if statement, with the condition being:
if the parameter is converted to all lowercase and equals itself then the variable wordIsLowerCased will be assigned boolean true
but if it doesn't equal itself the variable will be assigned boolean false
have the variable (wordIsLowerCased) returned out of the function */

function isLowerCased(word) {
  var wordIsLowerCased;
  for (var i = 0; i < word.length; i++) {
    if (word.toLowerCase() === word) {
      wordIsLowerCased = true;
    } else if (word.toLowerCase() !== word) {
      wordIsLowerCased = false;
    }
  }
  return wordIsLowerCased;
}
