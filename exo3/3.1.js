/* additionner tous les éléments d'un tabeleau */

/* initialisation du tableau */
let arr = [1, 2, 3, 4, 5];

/* variables qui donnera le resultat */
let resultat = 0;

/* boucle qui parcours le tableau et qui additionne les éléments pour les stocker dans la variables add */
for (let i = 0; i < arr.length; i++) {
    resultat += arr[i];
}
console.log(resultat)

/* deuxième tableau même méthode */
let arr2 = [100, 101, 102];
let resultat2 = 0;

for (let i = 0; i < arr2.length; i++) {
    resultat2 += arr2[i]
}
console.log(resultat2)