const assertArraysEqual = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(arr1, removal) {
let newarr = [];
  for(let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < removal.length; j++) { 
    if(arr1[i] !== removal[j])  {
      newarr.push(arr1[i]);
    } 
    if(newarr[i] === arr1[i]) {
      newarr.pop();
    }
    }
  }
  console.log(newarr); 
}

without([1,2,3,4], [2,3,4]);