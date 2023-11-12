const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters - input string is 'lighthouse in the house'", () => {
  // assuming uppercase and lowercase letters are unique
  const result = countLetters("lighthouse in the house");

  it("returns 1 for result['l']", () => {
    assert.strictEqual(result["l"], 1);
  });
  it("returns 4 for result['h']", () => {
    assert.strictEqual(result["h"], 4);
  });
  it("returns 2 for result['u']", () => {
    assert.strictEqual(result["u"], 2);
  });
  it("returns undefined for result[' ']", () => {
    assert.strictEqual(result[" "], undefined);
  });
  it("returns 1 for result['n']", () => {
    assert.strictEqual(result["n"], 1);
  });
  it("returns undefined for result['z']", () => {
    assert.strictEqual(result["z"], undefined);
  });
  it("returns 1 for result['l']", () => {
    assert.strictEqual(result["l"], 1);
  });
});