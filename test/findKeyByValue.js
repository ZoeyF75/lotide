const assert = require('chai').assert.strictEqual;
const findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('return key of The Wire: drama', () => {
    assert(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('return key of That 70s Show: undefined', () => {
    assert(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});