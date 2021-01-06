const assertEqual = (actual, expected) => {
  if (actual === expected){
    return true;
  } else {
    return false;
  }
};

const eqArrays = (actualArray, expectedArray) => {
  let boolean = [];
  for (let i = actualArray.length - 1; i >= 0; i--){
    boolean.push(assertEqual(actualArray[i], expectedArray[i]));
  }
  eqArraysEqual(actualArray, expectedArray, boolean);
};

const eqArraysEqual = (actualArray, expectedArray, boolean) => {
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
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
