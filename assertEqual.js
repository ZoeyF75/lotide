const assertEqual = (actual, expected) => {
  return actual === expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
};

console.log(assertEqual("Lighthouse Labs ", "Lighthouse Labs "));
console.log(assertEqual("hello", "bye"));
console.log(assertEqual(2,2));
console.log(assertEqual(2, 1));
