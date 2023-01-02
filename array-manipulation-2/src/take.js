/* exported take */
/* create a function with two parameters (array, count)
inside the function create a variable with a value of an empty array
then iterate through the array with a for loop and if i is less than the
count number then push the item from the array at the i index to the empty
array variable. Return the array variable out of the function */
function take(array, count) {
  var countArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      countArray.push(array[i]);
    }
  }
  return countArray;
}
