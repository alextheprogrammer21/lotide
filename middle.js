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
  let middleOfArray = array.length/2;
  let isEven = array.length % 2 === 0;
  let lengthLessThanThree = array.length < 3;

  if (isEven && !lengthLessThanThree) {
    newarr.push(array[(middleOfArray - 1]);
    newarr.push(array[middleOfArray);
  } else if (!isEven && !lengthLessThanThree) {
    newarr.push(array[middleOfArray -0.5]);
  }

  return newarr;
};

//TEST CODE 

eqArrays2(middle([1,2,3,4,5,6]), [3,4]);