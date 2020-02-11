//ASSERT EQUALS VERIFICATION 
const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Alphabet array 

//const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Count Letters Main Function
countLetters = (words) => {
  const words2 = words.split(" ").join("");
  let count = {}; 

  for (let i = 0; i < words2.length; i++) {
    if (count[words2[i]]) { 
      count[words2[i]] += 1; 
    } else { count[words2[i]] = 1; }
  }
  return count;
}

console.log(countLetters("Lighthouse Labs"));

module.exports = countLetters;
 