const assert = require('chai').assert.deepEqual;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns [1, 2, [3, 4], 5, [6]] === [1,2,3,4,5,6]', () => {
    assert(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });
});