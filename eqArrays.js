const assertEqual = require('./assertEqual.js');

const trueOrFalseArray = (actual, expected) => actual === expected ? true : false;
  
const eqArrays = (actualArray, expectedArray) => {
  let boolean = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    boolean.push(trueOrFalseArray(actualArray[i], expectedArray[i]));
  }
  for (let bool of boolean) {
    if (bool === false) return false;
  }
  return true;
};

module.exports = {
  assertEqual,
  eqArrays
};