const myFuncs = require('./eqArrays');
const eqArrays = myFuncs['eqArrays'];
let flattenedArray = [];

const flatten = function(array) {
  array.forEach((item) => {
    Array.isArray(item) ? flatten(item) : flattenedArray.push(item);
  });
  return flattenedArray;
};

module.exports = flatten;