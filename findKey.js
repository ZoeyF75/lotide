const assertEqual = require('./assertEqual');

const findKey = (object, key) => {
  let result;
  for (let o in object) {
    result = key(object[o]) ? o : undefined;
    if (result !== undefined) {
      return o;
    }
  }
};

module.exports = findKey;