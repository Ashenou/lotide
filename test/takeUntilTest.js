const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(`results`, results1);

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(`results`,results2);

assertArraysEqual(takeUntil(data2, (x) => x === ","),[ "I've", 'been', 'to', 'Hollywood' ]);