const assert = require('chai').assert.strictEqual;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns noma", () => {
    assert(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),'noma');
  });
});