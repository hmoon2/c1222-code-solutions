/* exported getKeys */
/* create a function with one parameter (object)
in the function code block create a variable (objProperties) and assign it an empty array
then create a for in loop and in the for in loop's code block push the property key into the variable objProperties
return objProperties */

function getKeys(object) {
  var objProperties = [];
  for (var key in object) {
    objProperties.push(key);
  }
  return objProperties;
}
