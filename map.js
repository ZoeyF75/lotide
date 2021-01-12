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

/* Test Code
const words = ["senpai", "weeb", "animalcrossing", "frenchhorn"];
const results1 = map(words, word => word[0]);
const proof = words.map(letter => letter[0]);
eqArrays(results1, proof);*/