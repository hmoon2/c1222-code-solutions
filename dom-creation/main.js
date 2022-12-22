/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

// function renderPokemon(pokedex) {
//   var column = document.createElement('div');
//   column.setAttribute('class', 'column-third');

//   var card = document.createElement('div');
//   card.setAttribute('class', 'pokemon-card');

//   var image = document.createElement('img');
//   image.setAttribute('src', pokedex.imageUrl);

//   var cardText = document.createElement('div');
//   cardText.setAttribute('class', 'pokemon-card-text');

//   var headerTwo = document.createElement('h2');
//   var headerTwoText = document.createTextNode(pokedex.name);

//   var headerThree = document.createElement('h3');
//   var identityNumber = document.createTextNode(pokedex.number);

//   var paragraph = document.createElement('p');
//   var infoParagraph = document.createTextNode(pokedex.description);

//   var pokemonName = headerTwo.appendChild(headerTwoText);
//   var pokemonNumber = headerThree.appendChild(identityNumber);
//   var pokemonDescription = paragraph.appendChild(infoParagraph);

//   column.appendChild(card);
//   card.appendChild(image);
//   card.appendChild(cardText);
//   cardText.appendChild(pokemonName);
//   cardText.appendChild(pokemonNumber);
//   cardText.appendChild(pokemonDescription);

//   return column;
// }

// var rowElement = document.querySelector('.row');

// for (var i = 0; i < pokedex.length; i++) {
//   renderPokemon[i];
// }
