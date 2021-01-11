const equalArrays = require('/vagrant/w1/lotide/assertArraysEqual.js');
let flattenedArray = [];

const flatten = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      flattenedArray.push(item);
    }
  });
  return flattenedArray;
}
equalArrays(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
