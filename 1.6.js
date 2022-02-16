const readlineSync = require("readline-sync");

let integer1 = new Number(readlineSync.question('give me an integer numer : '))
let integer2 = new Number(readlineSync.question('give me another integer numer : '))

console.log("the rest is",integer1%integer2);
