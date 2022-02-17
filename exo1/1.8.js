const readlineSync = require("readline-sync");

let question1 = readlineSync.question('what is your biggest dream ? ')
let question2 = readlineSync.question('what is your best drunk memory ? ')
let question3 = readlineSync.question('how did you lose your first tooth ? ')

console.log("So u want",  question1 , "on" , question2 , "with" , question3)
