const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Task 1 - Object.keys function on both objects and compare their lengths.
// Task 2 -  loop through the keys returned by Object.keys for one of the objects (not both), Use for..of.
// Task 3 - check if an array exists and send it to eqArrays to be checked if it returned false then exit
// Task 3 - Our control flow will therefore only get to the end of the loop if all the keys matched.

const eqObjects = function(object1, object2) {
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
module.exports = eqObjects;
