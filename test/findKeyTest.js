const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  const testArr = { "a": 3, "b": 2, "c": 3 };
  const emptyArr = [];

  it("returns 'noma' for findKey(restaurants, x => x.stars === 2)", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 2), "noma");
  });
  it("returns 'Akaleri' for findKey(restaurants, x => x.stars === 3)", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");
  });
  it("returns undefined for findKey(emptyArr, x => x.stars === 3)", () => {
    assert.strictEqual(findKey(emptyArr, x => x.stars === 3), undefined);
  });
  it("returns 'a' for findKey(testArr, x => x === 3)", () => {
    assert.strictEqual(findKey(testArr, x => x === 3), "a");
  });
});