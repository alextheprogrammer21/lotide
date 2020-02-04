const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`😎Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(item) {
  return item.slice(1);
};

const result = [2,3,4];
assertEqual(tail([0,3]),3);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!