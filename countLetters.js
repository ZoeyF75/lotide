const assertEqual = require('./assertEqual');

const countLetters = (string) => {
  let letters = {};
  for (let letter of string) letters[letter] ? letters[letter] += 1 : letters[letter] = 1;
  return letters;
};

module.exports = countLetters;