// Checks if two passed arrays are identical

const eqArrays = (array1, array2) => {
  let match = true;
  if (array1.length === array2.length) {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) {
        match = false;
      }
    }
    return match;
  }
  return false;
};
module.exports = eqArrays;

