// utils
const mergeArray = require("../utils/mergeArray");

/**
 * @desc sorts array using merge sort
 * @param {array} arr
 */
const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midPoint));
  let rightArr = mergeSort(arr.slice(midPoint));

  return mergeArray(leftArr, rightArr);
};

module.exports = mergeSort;
