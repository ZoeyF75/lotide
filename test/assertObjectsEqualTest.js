const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log('Assert Objects Equal:',assertObjectsEqual(eqObjects(cd,dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log('Assert Objects Equal:',assertObjectsEqual(eqObjects(cd, cd2), false));