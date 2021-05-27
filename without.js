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
