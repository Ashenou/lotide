// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Task 1 - Object.keys function on both objects and compare their lengths.
// Task 2 -  loop through the keys returned by Object.keys for one of the objects (not both), Use for..of.
// Task 3 - check if an array exists and send it to eqArrays to be checked if it returned false then exit
// Task 3 - Our control flow will therefore only get to the end of the loop if all the keys matched.
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (!object2[key]) {
        return false;
      } else if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed`,actual + "===" + expected);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed`, actual + "!==" + expected);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false

assertObjectsEqual(eqObjects(cd2, cd2), true); // => true
