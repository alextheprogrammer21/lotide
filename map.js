const map = (array, cb) => {

  let result = []; 

  for (let item of array) {
    result.push(cb(item));
  }
  return result;
}

firstLetter = (words) => {return words[0]};

const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, firstLetter)); 


module.exports = map;