/* création d'une class rectangle */

class rectangle {
    constructor (topleftXPos, topLeftYPos , width, length) {
        this.topLeftXPos = topleftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (rectangle.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            rectangle.topLeftXPos + rectangle.width > otherRectangle.topLeftXPos &&
            rectangle.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            rectangle.length + rectangle.topLeftYPos > otherRectangle.topLeftYPos)
            return true;
        else 
            return false;
        } 
    }

rectangle.collides = this.collides;

let rectangle1 = new rectangle(40, 20, 55, 55)
let rectangle2 = new rectangle(30, 30, 30, 10)

console.log(rectangle1.collides(rectangle), rectangle2.collides(rectangle))
