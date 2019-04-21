/**
 * @author Oluwafemi
 * @desc performs sorting using insertion sort
 * @param {array} inputArr
 */
const insertionSort = inputArr => {
  let currentVal;
  for (let i = 0; i < inputArr.length; i++) {
    currentVal = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > currentVal) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = currentVal;
  }
  return `Sorted array using insertion sort: [${inputArr}]`;
};

module.exports = insertionSort;
