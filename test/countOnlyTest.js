const assert = require('chai').assert.strictEqual;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it(`returns 1 for ${result1['Jason']} `, () => {
    assert(result1["Jason"], 1);
  });
  it(`returns undefined for ${result1['Karima']}`, () => {
    assert(result1["Karima"], undefined);
  });
  it(`returns 2 for ${result1['Fang']}`, () => {
    assert(result1["Fang"], 2);
  });
  it(`returns undefined for ${result1['Agouhanna']}`, () => {
    assert(result1["Agouhanna"], undefined);
  });
});