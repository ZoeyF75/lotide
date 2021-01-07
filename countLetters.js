const assertEqual = (actual, expected) => {
  return actual === expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
};

const countLetters = (string) => {
  let letters = {};
  for(let letter of string){
    if (letters[letter]){
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

console.log(countLetters("pineapple"));