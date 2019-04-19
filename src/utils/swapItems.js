/**
 * @author Oluwafemi Akinwa
 * @desc performs swapping of elements
 * @param {array} arr 
 * @param {int} firstIndex 
 * @param {int} nextIndex 
 */
const swapItems = (arr, firstIndex, nextIndex) => {
  [arr[firstIndex], arr[nextIndex]] = [arr[nextIndex], arr[firstIndex]];
  return [arr[firstIndex], arr[nextIndex]];
}

module.exports = swapItems;
