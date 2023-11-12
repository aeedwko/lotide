const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const numArr = [1,2,3];
  const strArr = ["a","b","c"];
  const emptyArr = [];

  it("returns [2, 4, 6] for map(numArr, num => num * 2", () => {
    assert.deepEqual(map(numArr, num => num * 2), [2, 4, 6]);
  });

  it("returns ['a is a letter', 'b is a letter', 'c is a letter'] for map(strArr, str => `${str} is a letter`)", () => {
    assert.deepEqual(map(strArr, str => `${str} is a letter`), ["a is a letter", "b is a letter", "c is a letter"]);
  });

  it("returns [] for map(emptyArr, item => item)", () => {
    assert.deepEqual(map(emptyArr, item => item), []);
  });
});