const assertEqual = require('./assertEqual');

const countLetters = (string) => {
  let letters = {};
  for (let letter of string) letters[letter] ? letters[letter] += 1 : letters[letter] = 1;
  return letters;
};

module.exports = countLetters;

/*Test Code
const example = 'pineapple';
const comparison = countLetters(example);
console.log(countLetters("hello i am a string"));
console.log(assertEqual(comparison['p'], 3));
console.log(assertEqual(comparison['e'], 2));*/