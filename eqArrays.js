const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`😎Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create something using JSON to verify that both arrays equal each other
//Create an assertequal that does the comparison 

const eqArrays2 = function(arr1, arr2) {
  let total = 0;
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      total+= 1;
    }
  }
  if (total === arr1.length) {
    console.log(`😎Assertion passed:`);
  } else {
    console.log(`🛑Assertion Failed:`);
  }
}

eqArrays2([1, 2, 3, 4], [1, 2, 3, 4]);


