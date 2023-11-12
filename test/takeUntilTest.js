const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const data3 = [];
  
  it("returns [1, 2, 5, 7, 2] for takeUntil(data1, x => x < 0)", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns [`I've`, `been`, `to`, `Hollywood`] for takeUntil(data2, x => x === ',')", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it("returns [] for data3, x => x === x)", () => {
    assert.deepEqual(takeUntil(data3, x => x === x), []);
  });
});