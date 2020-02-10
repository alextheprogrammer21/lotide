const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

eqArrays([1, 2, 3, 4], [1, 2, 3, 4]);

eqArrays([1,1,1,1,], [1]);