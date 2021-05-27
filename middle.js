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
// Task 1 - return element in the middle
// Edge case 1 - arrays with 1 or 2 elements return empty array
// Edge case 2 - Arrays with odd numbers return the element in the middle
// Edge case 3 - Arrays with even numbers return the number in the middle && mid+1
const middle = (array) => {
  let midArray = [];
  let mid1;
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 1) {
    mid1 = Math.floor((array.length) / 2);
    midArray.push(array[mid1]);
    return midArray;
  } else {
    mid1 = array.length / 2 - 1;
    midArray.push(array[mid1]);
    midArray.push(array[++mid1]);
    return midArray;
  }
};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5]));
