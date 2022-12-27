/* exported includesSeven */
function includesSeven(array) {
  var inArray = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      inArray = true;
    }
  }
  return inArray;
}
