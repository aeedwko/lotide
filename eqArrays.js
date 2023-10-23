const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤡🤡🤡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays(["hello", "", 3], [1, "hello", 3]), false);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([undefined], [0]), false);