const myFuncs = require('../tail.js');
const assertEqual = myFuncs.assertEqual;
const tail = myFuncs.tail;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));
console.log(assertEqual(tail(["pineapple"]), '[]'));
console.log(assertEqual(tail([]), '[]'));