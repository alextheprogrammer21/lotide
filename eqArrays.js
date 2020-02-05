const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`😎Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create something using JSON to verify that both arrays equal each other
//Create an assertequal that does the comparison 

const eqArrays = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    return true; 
  } else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);