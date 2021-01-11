const middle = (midArray) => {
  let mid = [];
  if (midArray.length <= 2) mid = [];
  else if (midArray.length % 2 !== 0) mid.push(midArray[Math.floor(midArray.length / 2)]);
  else if (midArray.length % 2 === 0) mid.push(midArray[(midArray.length / 2) - 1],midArray[midArray.length / 2]);
  return mid;
};

module.exports = middle;