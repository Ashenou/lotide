const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed ${actual} != ${expected}`);
  }
};

// Returns object that counts values for each letter and creates a key value
const countLetters = (stringOfletters) => {
  let countedLetters = {};
  let count = 1;

  for (const element of stringOfletters) {
    if (element !== " ") {
      if (countedLetters[element]) {
        if (countedLetters[element] > 0) {
          countedLetters[element] += 1;
        }
      } else {
        countedLetters[element];
        countedLetters[element] = count;
      }
    }
  }
  return countedLetters;
};

console.log(countLetters("Lighthouse in the house"));

const result1 = countLetters("Lighthouse in the house");

assertEqual(result1["L"],1);
assertEqual(result1["h"],4);
