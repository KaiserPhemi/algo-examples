// utils
const setMiddle = require('../utils/setMiddle');

/**
 * @author Oluwafemi Akinwa
 * @desc performs search using binary search method
 * @param {array} arr 
 * @param {int} elem 
 */
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = setMiddle(start, end);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = setMiddle(start, end);
  }
  return arr[middle] === elem
    ? `Element: ${elem} is located at index: ${middle}`
    : `Element: ${elem} does not exist in array thus has index: -1`
 };

module.exports = binarySearch;
