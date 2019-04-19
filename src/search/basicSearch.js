/**
 * @author Oluwafemi Akinwa
 * @desc search for a sub-string in a string
 * @param {string} longStr main string 
 * @param {string} queryStr search string
 */
const basicStringSearch = (longStr, queryStr) => {
  let count = 0;
  for(let i = 0; i < longStr.length; i++){
      for(let j = 0; j < queryStr.length; j++){
        if (queryStr[j] !== longStr[i + j]) {
          break;
        }
        if (j === queryStr.length - 1) { 
          count++;
        }
      }
  }
  return count;
}

module.export = basicStringSearch;
