const assert = require('chai').assert.strictEqual;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 1 for [1]", () => {
    assert(head([1]),1);
  });
  it("returns undefined for []", () => {
    assert(head([]));
  });
});