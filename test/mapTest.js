const assert = require('chai').assert.deepEqual;
const map = require('../map');

describe('#map', () => {
  it("returns ['s','w','a','f'] === ['s','w','a','f']", () => {
    const words = ["senpai", "weeb", "animalcrossing", "frenchhorn"];
    const results1 = map(words, word => word[0]);
    const proof = words.map(letter => letter[0]);
    assert(results1, proof);
  });
});