const assertEqual = require('../assertEqual.js');

console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual("hello", "bye"));
console.log(assertEqual(2,2));
console.log(assertEqual(2, 1));
console.log(assertEqual('1',1));
