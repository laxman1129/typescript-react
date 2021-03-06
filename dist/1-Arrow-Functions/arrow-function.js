"use strict";
/**
 * Function expressions are best for object methods.
 * Arrow functions are best for callbacks or methods like map, reduce, or forEach.
 *
 * Refrerence : https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
 */
/*classic js function */
//@ts-ignore NOT RECOMMENDED, only for demonstration
function sum(a, b) {
    return a + b;
}
/*arrow function with single line body */
var add = function (a, b) { return a + b; };
/*arrow function with multiple line body */
var subtract = function (a, b) {
    console.log('inputs are ', a, b);
    return a - b;
};
/*calling the functions */
console.log('sum is ', sum(5, 6));
console.log('add  ', add(2, 3));
console.log('diff is ', subtract(7, 9));
//# sourceMappingURL=arrow-function.js.map