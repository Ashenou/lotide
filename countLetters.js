const { assert } = require("chai");
const assertEqual = require("./assertEqual");

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
module.exports = countLetters;
