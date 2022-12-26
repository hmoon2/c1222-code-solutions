/* exported compact */
/* create a function with one parameter(array) that will return only truthy values from an array
in the function create a variable (truthyOnlyArray) with a value of an empty array
then create a for loop that will iterate through the array
and create an if statement in the for loop, in the condition if the value is a truthy value
then push the item into the empty array (truthyOnlyArray)
the return will be truthyOnlyArray */

function compact(array) {
  var truthyOnlyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyOnlyArray.push(array[i]);
    }
  }
  return truthyOnlyArray;
}
