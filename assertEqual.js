const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log("👍👍👍 Assertion Passed: " + actual + " === " + expected) : console.log("🤡🤡🤡 Assertion Failed: " + actual + " !== " + expected));
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Light", "Light");
assertEqual(1, 3);
assertEqual(1, 1);