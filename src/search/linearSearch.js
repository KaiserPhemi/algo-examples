/**
 * @desc uses linear search to search through an array
 * @param {array} arr array of integers 
 * @param {int} num search element
 */
const linearSearch = (arr, num) => {
  for(let val = 0; val< arr.length; val++) {
    if (arr[val] === num) {
      return val;
    }
  }
   return -1;
}

module.exports = linearSearch;
