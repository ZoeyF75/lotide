const _ = require('./index');
const eqArrays = _['eqArrays'];

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      for (let keys in results) {
        if (results[keys] === results[string[i]]) {
          results[keys].push(i);
        }
      }
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

//Test Code: eqArrays((letterPositions("hello").l) , [2,3]);

module.exports = letterPositions;