const assert = require('chai').assert.strictEqual;
const eqObjects = require('../eqObjects');

describe("#eqObject", () => {
  it("ab ba returns true given ab = { a: '1', b: '2' }, ba = { b: '2', a: '1' } ", () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '1' };
    assert(eqObjects(ab, ba), true);
  });
  it("ab abc returns false given abc = { a: '1', b: '2', c: '3' }", () => {
    const abc = { a: "1", b: "2", c: "3" };
    const ab = { a: '1', b: '2' };
    assert(eqObjects(ab, abc), false);
  });
  it("cd dc returns true given cd = { c: '1', d: ['2', 3] }, dc = { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert(eqObjects(cd, dc), true);
  });
  it("cd cd2 returns false given cd2 = { c: '1', d: ['2', 3, 4]", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cd = { c: "1", d: ["2", 3] };
    assert(eqObjects(cd, cd2), false);
  });
});