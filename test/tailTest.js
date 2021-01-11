const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tails", () => {
  it("return 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ["Labs"]);
  });
  it("return 5 for length of inputed array (input array is not mutated", () => {
    const words = ['Fresh', 'Prince', 'Of', 'Bel', 'Air'];
    tail(words);
    assert.strictEqual(words.length, 5);
  });
  it("return [] when theres only one element in the array", () => {
    assert.deepEqual(tail(['pineapple']), []);
  });
  it("return an empty array when the input array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
});
