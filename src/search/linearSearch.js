/**
 * @desc uses linear search to search through an array
 * @param {array} arr array of integers 
 * @param {int} num search element
 */
const linearSearch = (arr, num) => {
  for(let val = 0; val< arr.length; val++) {
    if (arr[val] === num) {
      return `Item: ${num} is located in array at index: ${val}`;
    }
  }
   return `Item: ${num} is not located within the array thus has index: -1`;
}

module.exports = linearSearch;
