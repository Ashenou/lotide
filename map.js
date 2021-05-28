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
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const word = map(words, (word) => word[0]);
//const word = map(words, (word) => word[1]);
const word = map(words, (word) => word[1]);

console.log(`word`, word);

//assertArraysEqual(word, ["g", "c", "t", "m", "t"]);
assertArraysEqual(word, ["r", "o", "o", "a", "o"]);
//assertArraysEqual(word, ["g", "c", "t", "m", "t"]);