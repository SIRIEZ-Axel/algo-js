/* faire une fonction qui demande à l'utilisateur d'entré la longueur et la largeur
et calcule la surface d'un rectangle */
const readlinSync = require("readline-sync");

/* création de la fonction avec ses éléments et son programme */
let calcsurface = (length, width) => {
    return length * width;
}

let length = new Number(readlinSync.question("tell me the length : "));
let width = new Number(readlinSync.question("tell me the width : "));

console.log(calcsurface(length, width));
