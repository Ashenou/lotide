//const assertEqual = require('../assertEqual');
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(["5"]), "5");
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());
