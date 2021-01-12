const assert = require('chai').assert.strictEqual;
const myFuncs = require('../eqArrays.js');
const eqArrays = myFuncs.eqArrays;
//const assertEqual = myFuncs.assertEqual;

describe("#eqArrays", () => {
  it("returns true for [1,2,3], [1,2,3]", () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false [1,2,3], [3,2,1]", () => {
    assert(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true ['1','2','3'], ['1','2','3']", () => {
    assert(eqArrays(['1','2','3'], ['1','2','3']), true);
  });
  it("returns false ['1','2','3'], ['1','2',3]", () => {
    assert(eqArrays(['1','2','3'], ['1','2',3]), false);
  });
  it("returns true [], []", () => {
    assert(eqArrays([], []), true);
  });
});
