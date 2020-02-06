findkey = (obj, cb) => {

  for (const element of Object.keys(obj)) {

    if (cb(obj[element]["stars"])) {
      return element;
    }
 
  }
};

object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findkey(object, x => x === 2));
