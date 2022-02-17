const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you tell me your name ? ');
let firstName = readlineSync.question('Can you tell me your First name ? ');
let city = readlineSync.question('Can you tell me where do you live ? ');

console.log("your name is" , name , firstName , "and you live in" , city);
