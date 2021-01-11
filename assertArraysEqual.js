const myFuncs = require('./eqArrays.js');
const eqArrays = myFuncs.eqArrays;

const assertArraysEqual = (actualArray, expectedArray) => {
  eqArrays(actualArray, expectedArray) ? console.log(`🤩🥳🤩 Assertion Passed: ${actualArray} === ${expectedArray}`) : console.log(`❌ Assertion Failed: ${actualArray} !== ${expectedArray}`);
  return eqArrays(actualArray, expectedArray);
};

module.exports = assertArraysEqual;



