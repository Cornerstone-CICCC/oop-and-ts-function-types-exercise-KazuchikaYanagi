"use strict";
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
