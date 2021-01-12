const myFuncs = require('./eqArrays');
const assertEqual = myFuncs['assertEqual'];
const eqArrays = myFuncs['eqArrays'];
const assertArraysEqual = require('./assertArraysEqual');

const implement = (until,exampleArray) => exampleArray.slice(0,until);
const takeUntil = (array, callback) => array.includes(callback) ? array.indexOf(callback) : 'This array does not contain a predicate value.';

module.exports = {
  implement,
  takeUntil
};