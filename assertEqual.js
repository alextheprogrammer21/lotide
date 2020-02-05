// FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1,13);