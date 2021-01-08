const assertEqual = (actual, expected) => actual === expected ? `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}` ;

const findKey = (object, key) => {
  for (o in object) {
    result = key(object[o]) ? o : undefined;
    if (result !== undefined) {
      return o;
    }
  }
};

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),'noma')); 


