const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
let assurtion = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      assurtion = false;
  } else {
  
    for (const keys of Object.keys(object1)) {

      if (object1[keys] !== object2[keys]) {

        if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
          if (JSON.stringify(object1[keys]) == JSON.stringify(object2[keys])) {  
          } else {
            assurtion = false;
          }
        } else {
          assurtion = false;
        }
      } else {
      }
    }
  }

  if(assurtion === true) {
    console.log(`✅Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true