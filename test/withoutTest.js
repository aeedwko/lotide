const assert = require('chai').assert;
const without = require('../without');

describe("#withoutTest", () => {
  
  it("returns [2,3] for without([1,2,3], [1])", () => {
    assert.deepEqual(without([1,2,3], [1]), [2,3]);
  });
  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns [] for without([], [1])", () => {
    assert.deepEqual(without([], [1]), []);
  });
  it("returns [] for without([], [])", () => {
    assert.deepEqual(without([], []), []);
  });
  it("returns [1, 2, 3] for without([1, 2, 3], [])", () => {
    assert.deepEqual(without([1,2,3], []), [1,2,3]);
  });
});