const assertEqual = require('./assertEqual');

const tail = function(item) {
  return item.slice(1);
};

module.exports = tail;
// const result = [2,3,4];


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!