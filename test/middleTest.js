const eqArrays2 = require('../eqArrays');
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);// passed
assertArraysEqual(middle([1,2,5,6]), [1,6]);//failed