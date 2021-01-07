const assertEqual = (actual, expected) => {
  return actual === expected ? true : false;
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

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++){
    if (results[string[i]]) {
      for (let keys in results){
        if(results[keys] === results[string[i]]){
          results[keys].push(i);
        }
      }

    } else {
      results[string[i]] = [i];
    }
  }
console.log(results);
  return results;
};

letterPositions('hello');
eqArrays(letterPositions("hello").l, [2,3]);