const readlineSync = require("readline-sync")

let ask = new Number(readlineSync.question('give me a number between 1 and 7 : '))

if ( ask == 1){
    console.log("monday")
}   else if (ask == 2) {
    console.log("tuesday")
}   else if (ask == 3) {
    console.log("wednesday")
}   else if (ask == 4) {
    console.log("thursday")
}   else if (ask == 5) {
    console.log("friday")
}   else if (ask == 6) {
    console.log("saturday")
}   else if (ask == 7) {
    console.log("sunday")
}   else {
    console.log("It's not between 1 and 7")
}
