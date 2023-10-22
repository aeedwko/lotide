const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤡🤡🤡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//More tests
assertEqual(tail([])[0], undefined);
assertEqual(tail([1])[0], undefined);
assertEqual(tail(["A", "B", "C"])[0], "B");
assertEqual(tail(["A", "B", "C"])[1], "C");
assertEqual(tail([1,2,3])[0], 2);
assertEqual(tail([1,2,3])[1], 3);