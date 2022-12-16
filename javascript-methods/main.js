var num1 = 3;
var num2 = 5;
var num3 = 8;
var maximumValue = Math.max(num1, num2, num3);

console.log('maxiumumValue:', maximumValue);

var heroes = ['Spiderman', 'Iron Man', 'Black Panther', 'Thor'];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

var randomHero = heroes[randomIndex];

console.log(randomHero);
