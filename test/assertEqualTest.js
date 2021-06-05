const assertEqual = require("../assertEqual");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const assert = require("chai").assert;
const head = require("../head");

describe("#AssertEqual", () => {
  it(`returns false for "Lighthouse Labs", "Bootcamp"`, () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
});
