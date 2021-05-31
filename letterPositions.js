const assertArraysEqual = require('./assertArraysEqual');

// Task 1 - loop through the sentence
// Task 2 - If the items exists we push the index to the results array

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
  console.log(results);
  return results;
};

// Accessing the e key of the returned object
console.log(letterPositions("lighthouse in the house").e);

//assertArraysEqual(letterPositions("hello").e, [1]);