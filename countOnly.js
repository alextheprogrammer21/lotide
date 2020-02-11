const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "karl", 
  "Salima", 
  "Agouhanna", 
  "Fang", 
  "Kavith", 
  "Jason", 
  "Salima", 
  "Fang", 
  "Joe"
];

const countOnly = function(firstNames, itemsToCount) {

  const results = {}; 

  for (const firstName of firstNames) {
    console.log(firstName);
    if (itemsToCount[firstName]) {      
      if (results[firstName]) {
        results[firstName] += 1;
      } else {
        results[firstName] = 1;
      }
    }
}
  return results; 

}



const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"], 1); 
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);




module.exports = countOnly;