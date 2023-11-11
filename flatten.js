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

const flatten = function(arr) {
  let flattenedArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }

  return flattenedArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([1, [2, 3], [3, 4], 5, [6]]), [1,2,3,3,4,5,6]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1,"2",3,4]), [1,"2",3,4]);

module.exports = flatten;