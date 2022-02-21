/* créer une fonction qui calcul le nommbre factoriel d'un nombre */
const readlineSync = require("readline-sync")
let a = new Number(readlineSync.question("Give me a number : "))

function factorial(a){
    if(a == 0 || a == 1){
        return 1;
    }else{
        return a * factorial(a-1);
    }
}

console.log("The factorial of " + a + " is " + factorial(a));