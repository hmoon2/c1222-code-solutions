var books = [
  {
    isbn: '123456',
    title: 'Where the Red Fern Grows',
    author: 'Willson Rawls'
  },
  {
    isbn: '789123',
    title: 'Hatchet',
    author: 'Gary Paulsen'
  },
  {
    isbn: '456789',
    title: 'Black Beauty',
    author: 'Anna Sewell'
  }
];

console.log('book array:', books);
console.log('typeof books:', typeof books);

var jsonBooks = JSON.stringify(books);

console.log('JSON.stringify of books array:', typeof jsonBooks);

var jsonStudent = "{'id': 159,'name': 'Jason'}";

console.log('jsonStudent:', jsonStudent);
console.log('typeof jsonStudent:', typeof jsonStudent);

var jsonObject = JSON.parse(jsonStudent);

console.log('jsonObject:', jsonObject);
console.log('typeof jsonObject', typeof jsonObject);
