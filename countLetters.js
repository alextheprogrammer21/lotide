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
  let count = {}; 

  for (let i = 0; i < words.length; i++) {
    if (count[words[i]]) { 
      count[words[i]] += 1; 
    } else { count[words[i]] = 1; }
  }
  return count;
}

console.log(countLetters("Lighthouse"));
 