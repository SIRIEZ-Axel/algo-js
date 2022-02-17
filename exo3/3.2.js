/* un programme qui donne la valeur moyenne du tableau */
/* initialisation du tableau */
let arr = [1, 2, 3, 4, 5];
let resultat = 0;

/* boucle qui parcours le tableau */
for (let i = 0; i < arr.length; i++) {
    resultat += arr[i]
}

/* afficher le résultat de la division entre la somme des éléments du tableau et sa longueur */
console.log(resultat/arr.length)
