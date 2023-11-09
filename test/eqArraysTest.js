const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays(["hello", "", 3], [1, "hello", 3]), false);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([undefined], [0]), false);