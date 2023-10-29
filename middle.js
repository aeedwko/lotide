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

const middle = function(arr) {
  let middleElements = [];
  
  if (arr.length <= 2) {
    return middleElements;
  } else if (arr.length % 2 === 1) {
    middleElements.push(arr[Math.floor(arr.length / 2)]);
  } else {
    middleElements.push(arr[(arr.length / 2) - 1]);
    middleElements.push(arr[arr.length / 2]);
  }

  return middleElements;
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);