/*outer ternary operator checks if the two values are the same type and if they are
it compares them with === else it compares them with == and attempts to coerce them for user friendliness*/
const assertEqual = (actual, expected) => {
  return typeof actual === typeof expected ? (actual === expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`) : (actual == expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
