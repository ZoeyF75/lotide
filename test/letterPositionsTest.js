const assert = require('chai').assert.deepEqual;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('return index of hello.l => [2,3] === [2,3]', () => {
    assert((letterPositions("hello").l) , [2,3]);
  });
});