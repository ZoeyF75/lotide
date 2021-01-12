const assert = require('chai').assert.deepEqual;
const myFunc = require('../takeUntil');
const takeUntil = myFunc['takeUntil'];
const implement = myFunc['implement'];

describe('#takeUntil', () => {
  it("return ['If', 'you', 'like', 'pina', 'coladas'] === ['If', 'you', 'like', 'pina', 'coladas']", () => {
    const exampleArray = ['If', 'you', 'like', 'pina', 'coladas', ',', 'and', 'getting', 'caught', 'in', 'the', 'rain'];
    const results = implement(takeUntil(exampleArray ,','),exampleArray);
    assert(results, ['If', 'you', 'like', 'pina', 'coladas']);
  });
});