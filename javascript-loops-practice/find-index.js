/* exported findIndex */
function findIndex(array, value) {
  var valueInArray = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueInArray = i;
      break;
    }
  }
  return valueInArray;
}
