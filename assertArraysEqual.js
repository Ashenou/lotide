const eqArrays = require('./eqArrays');

// Task 1 - sends array1,array2 to eqArrays
// Task 2 - if eqArrays returns true then we print that it passed otherwise return error
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed `);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed `);
  }
};
module.exports = assertArraysEqual;

