const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed ${actual} != ${expected}`);
  }
};

// Search for a key in an object where its value matches a given value.
// const findKeyByValue = (object, searchValue) => {
//   for (const key in object) {
//     if (object[key] === searchValue) {
//       return key;
//     }
//   }
// };
const findKeyByValue = (object, searchValue) => {
  for (const key of Object.keys(object)) {
    if (object[key] === searchValue) {
      return key;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
