const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const myFuncs = require('./eqArrays');
//Mocha and Chai was not implemented for eqArrays file so assertEqual was used within the eqArrays file
const assertEqual = myFuncs['assertEqual'];
const eqArrays = myFuncs['eqArrays'];
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeFunc = require('./takeUntil');
const takeUntil = takeFunc['takeUntil'];
const implement = takeFunc['implement'];
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  implement,
  without
};