/* exported getIndexes */
function getIndexes(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
}
