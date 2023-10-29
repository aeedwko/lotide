const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤡🤡🤡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const counts = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      counts[letter] ? counts[letter] += 1 : counts[letter] = 1;
    }
  }

  return counts;
};

// assuming uppercase and lowercase letters are unique

let result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["u"], 2);
assertEqual(result[" "], undefined);
assertEqual(result["n"], 1);
assertEqual(result["z"], undefined);
assertEqual(result["l"], 1);
assertEqual(countLetters("lighthouse in the house LLL")["L"], 3);