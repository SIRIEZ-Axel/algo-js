/* créer trois fonction qui permettent d'afficher la valeur min, max et la moyenne du tableau */
let arr = [];
let moyenne = 0;
let minarray = 0;
let maxarray = 0;
let min2 = 0;
let max2 = 10;
let rd = 0;
let readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("give a number : "))

/* foncion qui génère un entier entre 1 et 10 */
function rand10(min2, max2) {
    return (Math.floor(Math.random() * (max2 - min2 + 1) ) + min2);    
}

/* fonction qui crée un tableau avec des nombre aléatoire */
function multirand(n) {
    for (let i = 0; i < n; i++) {
       rd = rand10(min2, max2);
       arr[i] = rd;
    }
return arr
}

/* cacule moyenne du tableau */
function average() {
    for (let i = 0; i <arr.length; i++) {
        moyenne += arr[i];
    }
return moyenne/arr.length;
}

/* affiche la valeur minimum */
function min() {
    minarray = Math.min(...arr);
    return minarray
}

/* affiche la valeur maximum */
function max() {
    maxarray = Math.max(...arr);
    return maxarray
}

console.log("here's your array")
console.log("=================")
console.log(multirand(n))
console.log("the min value : ", min())
console.log("the max value : ", max())
console.log("the average : ", average()) 