const assertEqual = require('./assertEqual');

const findKeyByValue = (movieObject, title) => {
  for (let genres in movieObject) if (title === movieObject[genres]) return genres;
  return undefined;
};

module.exports = findKeyByValue;