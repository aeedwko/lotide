const countLetters = function(sentence) {
  const counts = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      counts[letter] ? counts[letter] += 1 : counts[letter] = 1;
    }
  }

  return counts;
};

module.exports = countLetters;