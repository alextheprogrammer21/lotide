const assertEqual = require('./assertEqual');

//Create something using JSON to verify that both arrays equal each other
//Create an assertequal that does the comparison 


// const assertArraysEqual = function(arr1, arr2) {
//   if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
//     console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// }


const eqArrays2 = function(arr1, arr2) {
  let total = 0;
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      total+= 1;
    }
  }
  if (total === arr1.length) {
return true;
  } else {
return false;
  }
}

// assertEqual(eqArrays2([1,4,3], [1,2,3]), false);
module.exports = eqArrays2; 

