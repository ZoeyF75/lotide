const pass = function(actual, expected) {
  return `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}`;
};

const fail = function(actual, expected) {
  return `❌ Assertion Failed: ${actual} !== ${expected}`;
};
/*
const assertEqual = function(actual, expected) {
  if (actual.isInteger === true) {
    if (actual === expected) { //eslint error b/c = is used to compare integers instead of ===
      console.log(pass(actual, expected));
    } else {
      console.log(fail(actual, expected));
    }
  } else {
    if (actual === expected) {
      console.log(pass(actual, expected));
    } else {
      console.log(fail(actual, expected));
    }
  }
};*/

const assertEqual = (actual, expected, fail) => {
  actual === expected ? console.log(pass(actual, expected)) : console.log(fail(actual, expected, fail));
};

assertEqual("Lighthouse Labs ", "Lighthouse Labs ");
assertEqual(2, 1);