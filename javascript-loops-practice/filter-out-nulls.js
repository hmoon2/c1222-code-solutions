/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'object') {
      noNullsArray.push(values[i]);
    }
  }
  return noNullsArray;
}
