const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([1, 2, 3], [1, 2])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it("returns false for eqArrays([1, 2], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false for eqArrays(['hello', '', 3], [1, 'hello', 3])", () => {
    assert.strictEqual(eqArrays(["hello", "", 3], [1, "hello", 3]), false);
  });
  it("returns false for eqArrays([], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([], [1, 2, 3]), false);
  });
  it("returns true for eqArrays([], [])", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns false for eqArrays([undefined], [0])", () => {
    assert.strictEqual(eqArrays([undefined], [0]), false);
  });
});