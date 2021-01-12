const assertEqual = require('../assertEqual.js');

console.log('Assert Equal Test:',assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log('Assert Equal Test:',assertEqual("hello", "bye"));
console.log('Assert Equal Test:',assertEqual(2,2));
console.log('Assert Equal Test:',assertEqual(2, 1));
console.log('Assert Equal Test:',assertEqual('1',1));
