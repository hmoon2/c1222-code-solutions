/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen result:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty result:', getEvenNumbersToTwenty());

// function repeatWord(word, times) {
//   var count = 1;
//   var repeated = '';

//   while (count === times) {
//     count++;
//   }
//   return repeated;
// }

// console.log('repeatWord:', repeatWord('cat', 5));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter(''));
console.log(logEachCharacter('Heerak'));
console.log(logEachCharacter('Tom ran to Jerry'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
}

console.log(doubleAll([2, 5, 6]));
console.log(doubleAll([3, 8, 1]));

// function getKeys(object) {
//   var keys = [];
//   for (key in object) {
//     keys.push[key];
//   }
//   return keys;
// }

// console.log(getKeys({ paws: 4, ears: 2 }));

// function getValues(object) {
//   var values = [];
//   for (key in object) {
//     values.push();
//   }
//   return values;
// }

// console.log(getValues({ chocolate: 'reeses', iceCream: 'mint' }));
