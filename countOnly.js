const assertEqual = require("./assertEqual");
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// Task 1 - check what items we need to count
// Task 2 - looping through the array and start counting(only count items that are true)
// Task 3 - if the value of the key doesn't exist which is in this case the count create it otherwiser increase it by 1 
// Task 4 - return counte Items array

const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};
  let count = 1;
  for (let index = 0; index < allItems.length; index++) {
    for (const key in itemsToCount) {
      if (allItems[index] === key && itemsToCount[key] === true) {
        if (countedItems[key] > 0) {
          countedItems[key] += 1;
        } else {
          countedItems[key] = count;
        }
      }
    }
  }
  return countedItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
