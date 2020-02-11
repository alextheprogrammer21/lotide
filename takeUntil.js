takeUntil = (array, callback) => {
  let result = [];

  for (const item of array) {
  if (callback(item)) {
  break;
  } 
  result.push(item);
  }
  console.log(`The result is ${result}`);
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => {
return  x < 0
});
console.log(results1);

module.exports = takeUntil;