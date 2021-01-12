const _ = require('./index');
const eqObjects = _.eqObjects;

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  return eqObjects(actual, expected) ? `🤩🥳🤩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

module.exports = assertObjectsEqual;

/*Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(assertObjectsEqual(eqObjects(cd,dc), true)); 

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(assertObjectsEqual(eqObjects(cd, cd2), false));*/
