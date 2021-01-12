const myFuncs = require('./eqArrays');
const assertEqual = myFuncs.assertEqual;
const eqArrays = myFuncs.eqArrays;

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let val of Object.keys(object1)) {
    if (Array.isArray(object1[val]) || Array.isArray(object2[val])) { //if the value at object1 or object 2 are arrays then this runs
      if (object1[val].length !== object2[val].length) return false; //checks that the val of the same key for each obj is the
      else if (eqArrays(object1[val], object2[val]) === false) return false;
    } else if (object1[val] !== object2[val]) return false;
  }
  return true;
};

module.exports = eqObjects;