const middle = require('../middle.js');
const assert = require('chai').assert.deepEqual;

describe("#middle", () => {
  it("return [] with array of single index", () => {
    assert(middle([1]), []);
  });
  it("return [] with array of only 2 indexes", () => {
    assert(middle([1,2]), []);
  });
  it("return [2] with input of [1, 2, 3]", () => {
    assert(middle([1, 2, 3]), [2]);
  });
  it("return ['hello'] with input of [1, 2, 'hello', 4, 5]", () => {
    assert(middle([1, 2, 'hello', 4, 5]), ['hello']);
  });
  it("return [2,3] with input of [1, 2, 3, 4]", () => {
    assert(middle([1, 2, 3, 4]), [2,3]);
  });
  it("return ['yee','hawe'] with input of [1, 2, 'yee', 'hawe', 5, 6]", () => {
    assert(middle([1, 2, 'yee', 'hawe', 5, 6]), ['yee','hawe']);
  });
});