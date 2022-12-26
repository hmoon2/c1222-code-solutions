/* exported reverse */
/* create a function with one parameter (array), this function will reverse the order of the array
create a variable (reversedArray) with an empty array as its value to store the reversed array
create a for loop that starts at the last index and ends with the first index and decrement instead of incrementing
during each iteration push the item into reversedArray
the return will be reversedArray */

function reverse(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
