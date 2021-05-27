const eqArrays = (array1, array2) => {
  let match = true;
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      match = false;
    }
  }
  return match;
};
// Task 1 - sends array1,array2 to eqArrays
// Task 2 - if eqArrays returns true then we print that it passed otherwise return error
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed`);
  }
};

// Task 1 - loop through the sentence
// Task 2 -
const letterPositions = function (sentence) {
  const results = {};
  
  for (let index = 0; index < sentence.length; index++) {
      
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        if (results[sentence[index]] !== undefined) {
          results[sentence[index]].push(index);
        }
      } else {
        results[sentence[index]];
        results[sentence[index]] = [index];
      }
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);