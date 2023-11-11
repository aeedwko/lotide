const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤡🤡🤡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const numArr = [1,2,3];
assertArraysEqual(map(numArr, num => num * 2), [2,4,6]);

const strArr = ["a","b","c"];
assertArraysEqual(map(strArr, str => `${str} is a letter`), ["a is a letter", "b is a letter", "c is a letter"]);

const emptyArr = [];
assertArraysEqual(map(emptyArr, item => item), []);

module.exports = map;