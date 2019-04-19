// utils
const swapItems = require('../utils/swapItems');

/**
 * @desc performs sorting using selection sort
 * @param {array} inputArr input array
 */
const selectionSort = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++){
    let minIndex = i;
    for (let j = i + 1; j < inputArr.length; j++){
      if (inputArr[minIndex] > inputArr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swapItems(inputArr, i, minIndex);
    }
  }
  return `Sorted array using selection sort: [${inputArr}]`;
};

module.exports = selectionSort;
