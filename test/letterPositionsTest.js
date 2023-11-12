const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions - with test string 'hello'", () => {
  const result = letterPositions("hello");

  it("returns [0] for result['h']", () => {
    assert.deepEqual(result["h"], [0]);
  });
  it("returns [1] for result['e']", () => {
    assert.deepEqual(result["e"], [1]);
  });
  it("returns [2, 3] for result['l']", () => {
    assert.deepEqual(result["l"], [2, 3]);
  });
  it("returns [4]] for result['o']", () => {
    assert.deepEqual(result["o"], [4]);
  });
});