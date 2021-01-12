const without = (givenArray, itemsToRemove) => {
  let numsToKeep = [];
  for (let e of givenArray) {
    let keep = true;
    for (let item of itemsToRemove) if (item === e) keep = false;
    if (keep) numsToKeep.push(e);
  }
  return numsToKeep;
};

module.exports = without;

/*Test Code
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]*/