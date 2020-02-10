

// const eqArrays2 = function(arr1, arr2) {
//   let total = 0;
//   for(let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       total+= 1;
//     }
//   }
//   if (total === arr1.length) {
//     console.log(`😎Assertion passed:`);
//   } else {
//     console.log(`🛑Assertion Failed:`);
//   }
// }

const assertArraysEqual = require('./assertArraysEqual');
// const assertArraysEqual = function(arr1, arr2) {
//   if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
//     console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

/** - Return an empty array for 1 or 2 element arrays
 *  - odd number arrays just return middle
 *  - even number arrays return the 2 fields in the middle 
 *  - Get it code reviewed by someone since there's inefficient code
 */
const middle = function(array) {
  let newarr = [];

  if (array.length % 2 !== 0) {
    newarr.push(array[Math.floor(array.length/2)]);
    return newarr;
  }

  if(array.length % 2 === 0) {
    let value2 = array.length/2;
    newarr.push(value2,array[array.length/2]);
  }
  return newarr;
};

// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);// passed
// assertArraysEqual(middle([1,2,5,6]), [1,6]);//failed

module.exports = middle;