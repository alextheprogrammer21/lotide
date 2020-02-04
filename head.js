const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(item) {
return item[0]; 
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);