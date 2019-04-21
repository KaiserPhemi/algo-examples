// modules
const linearSearch = require("./src/search/linearSearch");
const recursiveFactorial = require("./src/recursion/recursiveFactorial");
const binarySearch = require("./src/search/binarySearch");
const bubbleSort = require("./src/sorting/bubbleSort");
const selectionSort = require("./src/sorting/selectionSort");
const insertionSort = require("./src/sorting/insertionSort");
const mergeSort = require("./src/sorting/mergeSort");

// utils
const arrGenerator = require("./src/utils/intArrGenerator");
const compareInput = require("./src/utils/compareInput");

// generates a random array of integers
const myArr = arrGenerator(20);

// const myRes = binarySearch(myArr, 25)
console.log("");
console.log("Unsorted array", myArr);
console.log("");
console.log(insertionSort(myArr))
// const myRes = selectionSort(myArr);
// const myRes = mergeSort(myArr);
// console.log(`Sorted array using merge sort: [${myRes}]`);
console.log("");
// console.log(linearSearch(myArr, 20));
