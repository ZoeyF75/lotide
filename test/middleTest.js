const myFuncs = require('../middle.js');
const assertArraysEqual = myFuncs.assertArraysEqual;
const middle = myFuncs.middle;

console.log(assertArraysEqual(middle([1]), '[]'));
console.log(assertArraysEqual(middle([1, 2]), '[]'));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));