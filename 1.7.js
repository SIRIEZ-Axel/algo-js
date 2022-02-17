const readlineSync = require("readline-sync");

let size = new Number(readlineSync.question('give me your shoes size please : '))
let birth = new Number(readlineSync.question('give me your birth year : '))

let newsize1 = size*2
console.log('I will multiply your schoes size by 2:', newsize1)
let newsize2 = newsize1+5
console.log('now I add 5 to the result:', newsize2)
let newsize3 = newsize2*50
console.log('I will multiply it by 50:', newsize3)
let newsize4 = newsize3 - birth
console.log('now I substract with your birth year:', newsize4)
let newsize5 = newsize4 + 1766
console.log('now I add 1766 and we get :', newsize5)
