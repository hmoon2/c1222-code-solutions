/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharsString = '';
  string.split('');
  [string[firstIndex], string[secondIndex]] = [string[secondIndex], string[firstIndex]];

  return swappedCharsString;
}
