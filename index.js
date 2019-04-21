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
const myArr = arrGenerator();

// Basically using any of the methods involves
// 1. Generating an array using the arrGenerator() method & passing an array length as an argument
// 2. Calling any of the imported modules & passing the generated array as argument
// 3. the computeInput function is used as an argument to the native javascript method for more accurate sorting.
