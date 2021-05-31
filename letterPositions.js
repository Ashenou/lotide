const assertArraysEqual = require('./assertArraysEqual');
// Task 1 - loop through the sentence
// Task 2 -
const letterPositions = function(sentence) {
  const results = {};
  
  for (let index = 0; index < sentence.length; index++) {
      
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        if (results[sentence[index]] !== undefined) {
          results[sentence[index]].push(index);
        }
      } else {
        results[sentence[index]];
        results[sentence[index]] = [index];
      }
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);