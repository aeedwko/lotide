const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤡🤡🤡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

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

assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");
assertEqual(findKey(emptyArr, x => x.stars === 3), undefined);
assertEqual(findKey(testArr, x => x === 3), "a");