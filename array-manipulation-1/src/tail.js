/* exported tail */
/* create a function with one parameter (array) and in the function
create a variable (tailArray) with an empty array as its value
then create a for loop, the loop will start with the second item in the array instead of the first
during each iteration each items will be pushed into the tailArray
the function should return tailArray */

function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
