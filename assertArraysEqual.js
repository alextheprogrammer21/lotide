const assertArraysEqual = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1,2,3], [1,2,'3']);