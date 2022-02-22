/* générer un nombre entre 1 et 100 et donner des indices au user */
const readlineSync = require("readline-sync")

function rand100(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
}

let min = 0;
let max = 100;

console.log(rand100(min, max))

let num = new Number(readlineSync.question('Guess the number : '))

while (num !== rand100(min, max)) {
    if (num < rand100(min, max)) {
        console.log('Too low')
        num = new Number(readlineSync.question('Try again : '))
    }   else if (num > rand100(min, max)) {
            console.log('Too high')
            num = new Number(readlineSync.question('Try again : '))
        }
        else {
            console.log('Well guessed!')
            break;
        }
    }
