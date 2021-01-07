const assertEqual = (actual, expected) => {
  return actual === expected ? true : false;
};

const eqArrays = (actualArray, expectedArray) => {
  let boolean = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    boolean.push(assertEqual(actualArray[i], expectedArray[i]));
  }
  for (let bool of boolean) {
    if (bool === false) {
      return false;
    }
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let val of Object.keys(object1)) {
    if (Array.isArray(object1[val]) || Array.isArray(object2[val])) { //if the value at object1 and object 2 are arrays then this runs
      if (object1[val].length !== object2[val].length) { //if one is longer than the other returns false
        return false;
      } else {
        if (eqArrays(object1[val], object2[val]) === false) { //otherwise impliment the eqArrays function
          return false;
        }
      }
    } else if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));