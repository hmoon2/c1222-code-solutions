var num1 = 3;
var num2 = 5;
var num3 = 8;
var maximumValue = Math.max(num1, num2, num3);

console.log('maxiumumValue:', maximumValue);

var heroes = ['Spiderman', 'Iron Man', 'Black Panther', 'Thor'];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle'
  },
  {
    title: 'How the Grinch Stole Christmas!',
    author: 'Dr. Seuss'
  },
  {
    title: 'No, David!',
    author: 'David Shannon'
  }
];
var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(library[1]);

console.log('library:', library);
