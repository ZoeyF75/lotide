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
  for (bool of boolean){
    if (bool === false){
      return false
    } else {
      return true;
    }
  }
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false