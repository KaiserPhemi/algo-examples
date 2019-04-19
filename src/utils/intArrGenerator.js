// utils
const randomGenerator = require('./randomNumGenerator');

const PERFECT_NUM = 7; // just to make it much more random

/**
 * @author Oluwafemi Akinwa
 * @desc generates an array of integer
 * @param {int} arrLength length of the array;
 */
const arrGenerator = (arrLength) => {
  const elementValue = randomGenerator(arrLength * PERFECT_NUM);
  let arrResult = [];
  if (typeof arrLength !== 'number') {
    return 'Input must be an integer';
  } else {
    for (let count = 1; count <= arrLength; count++) {
      arrResult.push(randomGenerator(elementValue));
    }
  }
  return arrResult;
};

module.exports = arrGenerator;
