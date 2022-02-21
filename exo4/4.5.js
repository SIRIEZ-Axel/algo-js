/* fonction permettant de calculer la distance entre deux points */
let xA = -2;
let xB = 2;
let yA = 2;
let yB = -2;
let xDiff = 0;
let yDiff = 0;

/* Calcule la différence entre le point A et B ensuite procède au carré des résultats */
function calcDistance(xA, yA, xB, yB) { 
    xDiff = xA - xB; 
    yDiff = yA - yB; 

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

console.log(calcDistance(xA, yA, xB, yB));