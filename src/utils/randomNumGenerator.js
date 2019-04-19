/**
 * @author Oluwafemi Akinwa
 * @desc generates ramdon number
 * @param {int} inputSeed input integer to generate random number
 */
const randomGenerator = (inputSeed) => {
  return Math.ceil(Math.random() * inputSeed);
}

module.exports = randomGenerator;
