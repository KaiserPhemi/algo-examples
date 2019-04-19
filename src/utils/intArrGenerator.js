/**
 * @desc generates an array of integer
 * @param {int} arrLength length of the array;
 */
const arrGenerator = (arrLength) => {
  let arrResult = [];
  if (typeof arrLength !== 'number') {
    return 'Input must be an integer';
  } else {
    for (let count = 1; count <= arrLength; count++) {
      arrResult.push(Math.ceil(Math.random() * arrLength));
    }
  }
  return arrResult;
};

module.exports = arrGenerator;
