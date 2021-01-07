const assertEqual = (actual, expected) => {
  return actual === expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
};

const findKeyByValue = (movieObject, title) => {
  for (let genres in movieObject){
    if(title === movieObject[genres]){
      return genres;
    } 
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));