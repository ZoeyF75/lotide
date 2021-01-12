const myFuncs = require('./eqArrays');
const assertEqual = myFuncs['assertEqual'];
const eqArrays = myFuncs['eqArrays'];
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;