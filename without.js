const assertArraysEqual = require('./assertArraysEqual');

// Task 1 - store source array to temp array
// Task 2 - compare each element from itemsToRemoveArray to source Array
// Task 3 - if item  from itemsToRemoveArray exists in resultArray then remove
const without = (source, itemsToRemove) => {
  let resultArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < resultArray.length; j++) {
      if (resultArray[j] === itemsToRemove[i]) {
        resultArray.splice(j,1);
      }
    }
  }
  return resultArray;
};

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
