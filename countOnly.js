const assertEqual = (actual, expected) => {
  return actual == expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (item of allItems) {
    if (itemsToCount[item]|| itemsToCount[item] === false) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
 
  return results;
};

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

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));