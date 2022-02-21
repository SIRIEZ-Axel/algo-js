const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question ('give me a n times : '));
let m = 0;
let results = 0;

for (let i = 0 ; i < n ; i++ ) {
    m = new Number(readlineSync.question ('give me a m number : '));
    results = results + m;
}

console.log(results)



