const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeybyValue = (objects, value) => {

  for (const genre of Object.keys(objects)) {
    if (objects[genre] === value) {
    console.log(genre);
  }
}
}

findKeybyValue(bestTVShowsByGenre, "The Wire");