//ASSERT EQUALS VERIFICATION 
const assertArraysEqual = function(arr1, arr2) {
  if(JSON.stringify(arr1)===JSON.stringify(arr2)) {
    console.log(`😎Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

letterPositions = (sentence) => {
  const sentence2 = sentence.split(" ").join("");

  let result = {};

  for (let i = 0; i < sentence2.length; i++) {
    if (result[sentence2[i]]) {
      result[sentence2[i]].push(i);
    } else {
      result[sentence2[i]] = [i]; 
    }
  }
  return result;
}

console.log(letterPositions("lighthouse labs"));

assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);

module.exports = letterPositions;