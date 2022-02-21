let min = 0;
let max = 10;
let arr = [];
let rd = 0;

const readlineSync = require("readline-sync")
let n = new Number(readlineSync.question("give me a number : "))


function rand10(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);    
}

/* fonction qui rempli le tableau avec des nombres aléatoires et les stockent dans la variable rd */
function multirand(n) {
    for (let i = 0; i < n; i++) {
       rd = rand10(min, max);
       arr[i] = rd;
    }
return arr
}

console.log(multirand(n));