// Checks if two passed numbers are equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed ${actual} != ${expected}`);
  }
};
module.exports = assertEqual;

