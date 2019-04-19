// dependencies
const linearSearch = require('./src/search/linearSearch');
const arrGenerator = require('./src/utils/intArrGenerator');

// generates a random array of integers
const myArr = arrGenerator(20);

// performs linear search


console.log(myArr);
console.log(linearSearch(myArr, 25))
