function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var constructorFunction = new ExampleConstructor();

console.log('constructorFunction:', constructorFunction);

var checkInstanceOfConstructor = constructorFunction instanceof ExampleConstructor;

console.log('checkInstaceOfConstructor:', checkInstanceOfConstructor);
