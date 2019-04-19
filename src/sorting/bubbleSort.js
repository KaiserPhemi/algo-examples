// utils
const swapItems = require('../utils/swapItems');

/**
 * @author Oluwafemi Akinwa
 * @desc sorts an array using bubble-sort
 * @param {array} inputArr input array
 */
const bubbleSort = (inputArr) => { 
  let noSwaps; // 
  for(let i = inputArr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(inputArr[j] > inputArr[j+1]){
        swapItems(inputArr, j, j + 1);
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return `Sorted array using Bubble Sort: [${inputArr}]`;
};

module.exports = bubbleSort;
