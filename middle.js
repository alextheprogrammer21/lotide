const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`😎Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertArraysEqual = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/** - Return an empty array for 1 or 2 element arrays
 *  - odd number arrays just return middle
 *  - even number arrays return the 2 fields in the middle 
 *  - Get it code reviewed by someone since there's inefficient code
 */
const middle = function(array) {
  let newarr = [];
if(array.length > -1 && array.length < 3) {
  console.log(newarr);
  return newarr;
} else if (array.length % 2 == 0) {
newarr.push(array[(array.length/2) - 1]);
newarr.push(array[array.length/2])
console.log(newarr);
return newarr;
} else if (array.length % 2 !== 0) {
newarr.push(array[(array.length/2) -0.5])
console.log(newarr);
return newarr;
}
};

//TEST CODE 

eqArrays2(middle([1,2,3,4,5,6]), [3,4]);