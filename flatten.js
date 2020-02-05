const assertArraysEqual = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const flatten = function(input) {
let output = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) == true) { 
        for (let j = 0; j < input[i].length; j++) {
          output.push(input[i][j]);
        }
    } else {
      output.push(input[i]);
    }
  }
  console.log(output); 
}

flatten([1,2,[3,4]]); 