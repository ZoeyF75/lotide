const assert = require('chai').assert.deepEqual;
const without = require('../without');
describe('#without', () => {
  it('return [1,2,3] w/o [1] => [2,3]', () => {
    assert(without([1, 2, 3], [1]), [2,3]);
  });
  it("return ['1','2','3'] w/o [1,2,'3'] => ['1','2']", () => {
    assert(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});