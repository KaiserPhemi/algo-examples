// dependencies
const linearSearch = require('./src/search/linearSearch');
const recursiveFactorial = require('./src/recursion/recursiveFactorial');
const binarySearch = require('./src/search/binarySearch');
const bubbleSort = require('./src/sorting/bubbleSort');

// utils
const arrGenerator = require('./src/utils/intArrGenerator');
const compareInput = require('./src/utils/compareInput');

// generates a random array of integers
const myArr = arrGenerator(15);

// const myRes = binarySearch(myArr, 25)
console.log('');
console.log('Unsorted array', myArr);
console.log('');
const myRes = bubbleSort(myArr);
console.log(myRes);
console.log('');
