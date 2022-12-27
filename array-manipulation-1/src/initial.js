/* exported initial */
/* create a function with one parameter (array)
in the function create a variable (arrayWithoutLastItem) with an empty array as its value
then create a for loop, it will iterate through the array starting from the first index, and ending with the second to last item
each item will be pushed into arrayWithoutLastItem
the return will be arrayWithoutLastItem */

function initial(array) {
  var arrayWithoutLastItem = [];
  for (var i = 0; i < array.length - 1; i++) {
    arrayWithoutLastItem.push(array[i]);
  }
  return arrayWithoutLastItem;
}
