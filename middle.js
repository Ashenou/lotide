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
module.exports = middle;
