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

const without = function(source, itemsToRemove) {
  let subset = [];
  let isRemovable = false;

  for (let i = 0; i < source.length; i++) {
    isRemovable = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isRemovable = true;
        break;
      }
    }
    if (!isRemovable) {
      subset.push(source[i]);
    }
  }

  return subset;
};

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1,2,3], []), [1,2,3]);
assertArraysEqual(without([1,2,3], [1]), [2,3]);

const words = [1, 2, 3];
without(words, [1]);
assertArraysEqual(words, [1,2,3]);