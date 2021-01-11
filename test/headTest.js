const myFuncs = require('../head.js');
const head = myFuncs.head;
const assertEqual = myFuncs.assertEqual;

console.log(assertEqual(head([5,6,7]),5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([1]), 1));
console.log(assertEqual(head([])));