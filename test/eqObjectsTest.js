const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  it("returns true for eqObjects(shirtObject, anotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  it("returns false for eqObjects(shirtObject, longSleeveShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  it("returns true for eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });

  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  it("returns false for eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });
});