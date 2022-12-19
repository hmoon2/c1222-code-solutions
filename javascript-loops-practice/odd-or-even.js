/* exported oddOrEven */
function oddOrEven(numbers) {
  var numbersAre = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbersAre.push('even');
    } else if (numbers[i] % 2 !== 0) {
      numbersAre.push('odd');
    }
  }
  return numbersAre;
}
