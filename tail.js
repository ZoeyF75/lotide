const pass = function(actual, expected) {
  return `🤩🥳🤩 Assertion Passed: ${actual} === ${expected}`;
};

const fail = function(actual, expected) {
  return `❌ Assertion Failed: ${actual} !== ${expected}`;
};

const assertEqual = function(actual, expected) {
  if (actual.isInteger === true) {
    if (actual == expected) {
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
};

const tail = function(array) {
  const tailArray = array.slice(1,array.length);
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log(tail(["pineapple"]));
console.log(tail([]));

