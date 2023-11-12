const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

let result = letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);
