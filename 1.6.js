const readlineSync = require("readline-sync");

let integer1 = new Number(readlineSync.question('give me an integer number : '))
let integer2 = new Number(readlineSync.question('give me another integer number : '))

console.log("the rest is",integer1%integer2);
