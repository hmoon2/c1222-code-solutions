function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('result of convertMinutesToSeconds:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log('result of greeting:', greeting);
}

greet('Beavis');

function getArea(width, height) {
  var areaResult = width * height;
  return areaResult;
}

var areaTotal = getArea(17, 42);

console.log('value of areaTotal:', areaTotal);

function getFirstName(person) {
  return person.firstName;
}

var firstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('result of firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastItem = array.length - 1;
  var lastElement = array[lastItem];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('result of getLastElement:', getLastElementResult);
