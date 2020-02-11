const tail = require('../tail');
const assert = require('chai').assert;

// const assertEqual = require('../assertEqual');
// assertEqual(tail([0,3]),3);


describe("#Tail", () => {
  it("Should return [3] if you input [0,3]", () => {
    assert.deepEqual(tail([0, 3]), [3]);
  });



});