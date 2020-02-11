const middle = require('../middle');
const assert = require('chai').assert;


// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);// passed
// assertArraysEqual(middle([1,2,5,6]), [1,6]);//failed


describe("#Tail", () => {
  it("Should return [3,4] if you input [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);// passed
  });


});