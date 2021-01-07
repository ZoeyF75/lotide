const arraysEqual = (compareArray, midArray) => {
  for (let i = 0; i < compareArray.length; ++i) {
    if (compareArray[i] !== midArray[i]) return false;
  }
  return true;
};

const assertEqual = (actual, expected, midArray) => {
  let compareArray = [];
  compareArray.push(actual,expected);
  if (arraysEqual(compareArray, midArray)) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = (actualArray, expectedArray) => {
  let boolean = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    boolean.push(assertEqual(actualArray[i], expectedArray[i],expectedArray));
  }
  assertArraysEqual(actualArray, expectedArray, boolean);
};

const assertArraysEqual = (actualArray, expectedArray, boolean) => {
  let stayFalse = true;
  for (let bool of boolean) {
    if (bool === true) {
      stayFalse = false;
    }
  }
  if (stayFalse) {
    console.log(`❌ Assertion Failed: ${expectedArray} !== the middle of ${actualArray}`);
  } else {
    console.log(`🤩🥳🤩 Assertion Passed: ${expectedArray} === the middle of ${actualArray}`);
  }
};

const middle = (midArray) => { //returns [2,3]
  let mid = [];
  if (midArray.length <= 1) {
    mid = [];
  } else if (midArray.length % 2 !== 0) {
    mid.push(midArray[(Math.floor((midArray.length / 2) - 1))]);
  } else if (midArray.length % 2 === 0) {
    mid.push(midArray[(midArray.length / 2) - 1]);
    mid.push(midArray[midArray.length / 2]);
  }
  return mid;
};

eqArrays([1,2,2,4,6],(middle([1,2,2,4,6])));