const myFuncs = require('./eqArrays');
const assertEqual = myFuncs.assertEqual;
const eqArrays = myFuncs.eqArrays;

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let val of Object.keys(object1)) {
    if (Array.isArray(object1[val]) || Array.isArray(object2[val])) { //if the value at object1 or object 2 are arrays then this runs
      if (object1[val].length !== object2[val].length) return false; //checks that the val of the same key for each obj is the
      else if (eqArrays(object1[val], object2[val]) === false) return false;
    } 
  else if (object1[val] !== object2[val]) return false;
  }
  return true;
};

module.exports = eqObjects;

//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));