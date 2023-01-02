/* exported takeRight */
/* create a function with two parameters (array, count)
in the function create a variable with an empty array as its value
then create a for loop to iterate through the array, i will start at */

function takeRight(array, count) {
  var lastCountElementsArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    lastCountElementsArr.push(array[i]);
  }
  return lastCountElementsArr;
}
