/* exported tail */
/* create a function with one parameter (array) and in the function
create a variable (tailArray) with an empty array as its value and then create a for loop
in the for loop create an if statement
the condition for the if statement being, if array at i is not equal to array at the first index, then push it into the empty array
lastly return tailArray */

function tail(array) {
  var tailArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
