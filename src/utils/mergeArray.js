/**
 * @desc merges two sub-arrays
 * @param {array} firstArr 
 * @param {array} nextArr 
 */
const mergeArray = (firstArr, nextArr) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < firstArr.length && j < nextArr.length) {
    if (nextArr[j] > firstArr[i]) {
      mergedArray.push(firstArr[i]);
      i++;
    } else {
      mergedArray.push(nextArr[j])
      j++;
    }
  }
  while (i < firstArr.length) {
    mergedArray.push(firstArr[i])
    i++;
  }
  while (j < nextArr.length) {
    mergedArray.push(nextArr[j])
    j++;
  }
  return mergedArray;
}

module.exports = mergeArray;
