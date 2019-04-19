/**
 * @author Oluwafemi
 * @desc performs sorting using insertion sort
 * @param {array} inputArr 
 */
const insertionSort = (inputArr) => { 
  let currentVal;
  for(let i = 0; i < inputArr.length; i++){
    currentVal = inputArr[i];
    let k;
    for (let j = i - 1; j >= 0 && inputArr[j] > currentVal; j--) {
      k = j + 1;
      inputArr[j + 1] = inputArr[j];
    }
    inputArr[k] = currentVal;
  }
  return `Sorted array using insertion sort: [${ inputArr }]`;
};

module.exports = insertionSort;
