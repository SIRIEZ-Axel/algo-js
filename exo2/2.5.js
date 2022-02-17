const readlineSync = require("readline-sync")

let fav = new Number(readlineSync.question('give me your favorite number : '))
let i = 42

while (fav != i) {
    console.log('are you sure : ')
    let fav = new Number(readlineSync.question('give me your favorite number : '))
    if (fav == i) {
        console.log('You got it!')
        break
    }
}