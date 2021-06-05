// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

// Task 1 - sends array1,array2 to eqArrays
// Task 2 - if eqArrays returns true then we print that it passed otherwise return error

const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
module.exports = takeUntil;