const assertEqual = function (actual, expected) {
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

const assertArraysEqual = (array1, array2) => {
  assertEqual(eqArrays(array1, array2), true);
};

const without = (source, itemsToRemove) => {
  let resultArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        resultArray.push(source[i]);
      }
    }
  }
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
