const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed ${actual} != ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  let match = true;
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      match = false;
    }
  }
  return match;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should not PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
