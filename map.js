const assertEqual = (actual, expected) => {
 return actual === expected? true : false;
};

const eqArrays = (actualArray, expectedArray) => {
  let boolean = [];
  for (let i = actualArray.length - 1; i >= 0; i--){
    boolean.push(assertEqual(actualArray[i], expectedArray[i]));
  }
  assertArraysEqual(actualArray, expectedArray, boolean);
};

const assertArraysEqual = (actualArray, expectedArray, boolean) => {
  for (bool of boolean){
    if (bool === false){
      console.log(`❌ Assertion Failed: ${actualArray} !== ${expectedArray}`);
      return false
    } else {
      console.log(`🤩🥳🤩 Assertion Passed: ${actualArray} === ${expectedArray}`);
      return true;
    }
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["senpai", "weeb", "animalcrossing", "frenchhorn"];
const results1 = map(words, word => word[0]);
const proof = words.map(letter => letter[0]);
eqArrays(results1, proof);


