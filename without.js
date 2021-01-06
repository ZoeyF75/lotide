const assertEqual = (actual, expected) => {
  if (actual !== expected){
    return actual;
  }
};

const eqArrays = (actualArray, expectedArray) => {
  let numsToKeep = [];
  let finalArray = [];
  for (let i = 0; i <= actualArray.length - 1; i++){
    numsToKeep.push(assertEqual(actualArray[i], expectedArray[i]));
  }
  for (num of numsToKeep){
    if (num !== undefined){
      finalArray.push(num);
    }
  }
  return finalArray;
};

const without = (givenArray, removeFromArray) => {
    const withoutArray = eqArrays(givenArray, removeFromArray); 
    return withoutArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]