/**
 * @desc calculates number factorial using recursion
 * @param {int} num integer to calculate factorial
 */
const recursiveFactorial = (num) => {
  if (typeof num !== 'number') {
    return 'Input must be an integer';
  } else if (num === 1) {
    return 1
  } else {
    return num * recursiveFactorial(num - 1);
  }
}

module.exports = recursiveFactorial;
