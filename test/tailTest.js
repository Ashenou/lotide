const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
  });
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Labs"].toString());
  });
});