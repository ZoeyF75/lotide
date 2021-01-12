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