// const assertArraysEqual = require("../assertArraysEqual");
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

const assert = require("chai").assert;
const eqArrays = require('../eqArrays');

describe("#ArraysEqual", () => {
  it(`returns true for [1, 2, 3] and [1, 2, 3]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true
    );
  });
  it(`returns false for [1, 2, 3] and [1, 2, 3]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]),false
    );
  });
  it(`returns true for ["1", "2", "3"] and ["1", "2", "3"]`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true
    );
  });
  it(`returns false for ["1", "2", "3"] and ["1", "2", 3]`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false
    );
  });
});
