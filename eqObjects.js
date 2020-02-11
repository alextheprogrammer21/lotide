const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`🛑Assertion Failed: ${object1} !== ${object2}`);
  } else {
  
    for (const keys of Object.keys(object1)) {

      if (object1[keys] !== object2[keys]) {

        if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
          if (JSON.stringify(object1[keys]) == JSON.stringify(object2[keys])) {
            console.log(`😎Assertion passed: ${object1} === ${object2}`);
          } else {
            console.log(`🛑Assertion Failed: ${object1} !== ${object2}`);
          }
        } else {
          console.log(`🛑Assertion Failed: ${object1} !== ${object2}`);
        }
      } else {
        console.log(`✅Assertion passed: ${object1} === ${object2}`);
      }
    }
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

module.exports = eqObjects;