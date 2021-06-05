// const assertEqual = require('./assertEqual');
// const assertArraysEqual = require('./assertArraysEqual');
// const assertObjectsEqual = require('./assertObjectsEqual');
// const eqArrays= require('./eqArrays');
const head = require("./head");
const tail = require("./tail");

const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");

const countLetters = require("./countLetters");
const countOnly = require("./countOnly");

const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const findKeys = require("./findKey");
const findKeyByValue = require("./findKeyByValue");

const letterPositions = require("./letterPositions");
const map = require("./map");

const middle = require("./middle");
const takeUntil = require("./takeUntil");

const without = require("./without");
// ... other requires would go here

head([1, 2, 3]); // => 1
tail([1, 2, 3]); // => [2, 3]

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
};
