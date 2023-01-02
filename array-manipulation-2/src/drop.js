/* exported drop */
/* create a function with two parameters (array, count)
in the function create a variable with an empty array as its value
then create a for loop, i will equal and start the loop at the number that is
put into the count parameter. The item from array at i will then be pushed into
the empty array and returned */

function drop(array, count) {
  var countArray = [];
  for (var i = count; i < array.length; i++) {
    countArray.push(array[i]);
  }
  return countArray;
}
