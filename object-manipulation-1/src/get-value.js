/* exported getValue */
/* create a function with two parameters (object, key) in the function
create a new variable (keyValue) and assign it the value from the object at the key property
then return the value of the keyValue variable
 */

function getValue(object, key) {
  var keyValue = object[key];
  return keyValue;
}
