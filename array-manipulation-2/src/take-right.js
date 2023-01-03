/* exported takeRight */
/* create a function with two parameters (array, count)
in the function create a variable with an empty array as its value
then create a for loop to iterate through the array, i will start at the index number that is the length of the array minus the count
in the for loop, create an if statement where if the value of count is larger than the array length, then the array is returned
if it is smaller, then the item at i will be pushed to the empty array and once the loop iterates all the way through the new array will be returned */

function takeRight(array, count) {
  var lastCountElementsArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      return array;
    }
    lastCountElementsArr.push(array[i]);
  }
  return lastCountElementsArr;
}
