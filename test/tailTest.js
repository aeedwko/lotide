const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [] for tail([])", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for tail([1])", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns ['B', 'C'] for tail(['A', 'B', 'C'])", () => {
    assert.deepEqual(tail(['A', 'B', 'C']), ['B', 'C']);
  });

  it("returns [2, 3] for tail([1, 2, 3])", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});