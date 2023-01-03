/* exported dropRight */
/* create a function with two parameters (array, count)
in the function, create a variable with the value of an empty array
then create a for loop, in the for loop create an if statement
if i is less than the amount after count is subtracted from the array length, then the item at the i index
will be pushed into the empty array. After the loop iterates through the array, the new array will be returned */

function dropRight(array, count) {
  var dropRight = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - count) {
      dropRight.push(array[i]);
    }
  }
  return dropRight;
}
