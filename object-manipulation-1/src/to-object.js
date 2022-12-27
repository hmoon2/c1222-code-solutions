/* exported toObject */
/* create a function with one parameter (keyValuePair)
Create three variables. One will be a variable (object) with an empty object literal as the value.
The next will be a variable (property) that is assigned the keyValuePair at the first index
The last new variable (value) will be assigned the keyValuePair at the second index
Value is then assigned to object at property
the return will be the object variable */

function toObject(keyValuePair) {
  var object = {};
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  object[property] = value;
  return object;
}
