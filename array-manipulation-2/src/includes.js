/* exported includes */
/* create a function with two parameters (array, value)
in the function, create a for loop and in that for loop create an if statement
if the item at the i index of the array is strictly equal to the value then the return will be true
otherwise the return will be false */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
