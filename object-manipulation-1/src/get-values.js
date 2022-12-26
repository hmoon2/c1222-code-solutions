/* exported getValues */
/* create a function with one parameter (object) in the function code block
create a variable and assign it an empty array
create a for in loop that will iterate through the values of the object
then push the values from the object's properties and push them into the empty array
return the variable that was assigned the empty array */

function getValues(object) {
  var valuesArray = [];
  for (var value in object) {
    valuesArray.push(object[value]);
  }
  return valuesArray;
}
