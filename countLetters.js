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
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["u"], 2);
assertEqual(countLetters("lighthouse in the house")[" "], undefined);
assertEqual(countLetters("lighthouse in the house")["n"], 1);
assertEqual(countLetters("lighthouse in the house")["z"], undefined);
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house LLL")["L"], 3);