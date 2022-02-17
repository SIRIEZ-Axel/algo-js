const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question('tell me your age : '))

if (age >= 18){
    console.log("You are an adult")
}    else {
        console.log("you are not yet an adult")
}
