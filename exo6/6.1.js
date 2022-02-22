/* création d'un cercle dont je dois calculer la surface */
class circle {
    constructor(xpos, ypos, radius) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xOffset = xpos;
        this.yOffset = ypos;
    }
    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

circle.surface = this.surface;

let circle1 = new circle(0, 0, 5);

console.log("Circle area :", circle1.surface)