const assertEqual = (actual, expected) => {
  return actual === expected ? true : false;
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

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++){
    if (results[string[i]]) {
      let prop;
      for (prop in results) {
        
      }
    } else {
      results[string[i]] = [i];
    }
  }
  /*
  for(let letter of string) { //loops through each individual letter of the string  
    if (results[letter]) { //if a key thats equal to letter exsists @ results
      (results[letter]) = array.push(string.indexOf(letter));
    } else {
      results[letter] = [(string.indexOf(letter)]
    }
}*/
console.log(results);
  return results;
};

letterPositions('hello');