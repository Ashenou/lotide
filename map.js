const assertArraysEqual = require(`./assertArraysEqual`);

const map = function(array, callback) {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const word = map(words, (word) => word[0]);
//const word = map(words, (word) => word[1]);
const words = ["ground", "control", "to", "major", "tom"];
const word = map(words, (word) => word[1]);
console.log(`word`, word);

assertArraysEqual(word, ["r", "o", "o", "a", "o"]);
//assertArraysEqual(word, ["g", "c", "t", "m", "t"]);
//assertArraysEqual(word, ["g", "c", "t", "m", "t"]);