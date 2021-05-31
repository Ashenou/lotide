const assertEqual = require('./assertEqual');

// Find which key has the requested value
const findKey = (obj, callBack) => {
  // Gets key for each item in object
  for (const item in obj) {
    // Gets the value(nested object) of the key in parent object(x.stars) and runs it towards the call back function that has a condition if the condtion is true and the callback returns true then it returns the item of that key.
    if (callBack(obj[item])) {
      return item;
    }
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),"noma"
); // => "noma"
