/* exported ransomCase */
/* Create a function with one parameter (string) and inside the function create a
variable with the value of an empty string. Then iterate through the string with a
for loop, where if the character has an even index then the character is lowercased
and then concatenated with the empty string variable. If the character is odd then
it is uppercased and then concatenated with the empty string variable. The return
will be empty string variable that has been concatenated */

function ransomCase(string) {
  var everyOtherCharacterUppercased = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      everyOtherCharacterUppercased += string[i].toLowerCase();
    } else if (i % 2 !== 0) {
      everyOtherCharacterUppercased += string[i].toUpperCase();
    }
  }
  return everyOtherCharacterUppercased;
}
