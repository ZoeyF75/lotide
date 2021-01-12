const _ = require('./index');
const eqObjects = _.eqObjects;

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual, expected) ? `🤩🥳🤩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

module.exports = assertObjectsEqual;