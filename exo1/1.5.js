const readlineSync = require("readline-sync");

let number1 = new Number (readlineSync.question('give me a decimal number : '));
let number2 = new Number (readlineSync.question('give me another decimal number : '));

console.log("The result is =" , Math.trunc(number1) , "*" *number2)