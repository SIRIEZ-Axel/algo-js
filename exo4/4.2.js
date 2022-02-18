/* créaction d'une fonction qui retourne un nombre entier entre 1 et 10 */
function rand10(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
}

let min = 0;
let max = 10;

console.log(rand10(min, max))