const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('give me a min number : '))
let max = new Number(readlineSync.question('give me a max number : '))
let current = new Number(readlineSync.question('give me a current number : '))

if (current >= min && current <= max) {
    console.log(min, current, max)
}    else if (min > max) {
    console.log("your min is greater than your max sorry but you did not understand the question")
}
