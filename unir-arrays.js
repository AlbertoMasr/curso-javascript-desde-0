// Concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const arrayConcatenado1 = array1.concat(array2);
const arrayConcatenado2 = [].concat(array1, array2, array3);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(arrayConcatenado1);
console.log(arrayConcatenado2);

// Spread Operator
const arraySpread1 = [...array1, ...array2];
const arraySpread2 = [...array1, ...array2, ...array3];
const arraySpread3 = [...array1, array2, ...array3, 10, 11, 12, '13'];

console.log(arraySpread1);
console.log(arraySpread2);
console.log(arraySpread3);

// Join
const arrayJoin1 = array1.join(' - ');

console.log(arrayJoin1);