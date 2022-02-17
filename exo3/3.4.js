/* faire un programme qui sors seulement la valeur minimum et maximum */
let arr = [5000 ,1584 ,64653, 4484, 5353];

/* copie du tableau et calcul de la valeur la plus petite */
let minarray = Math.min(...arr);

/* copie du tableau et calcul de la valeur la haute petite */
let maxarray = Math.max(...arr);

console.log(minarray, maxarray);