/* création d'une class rectangle */
class rectangle {
    constructor (topLeftXPos, topLeftYPos , width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (rectangle1.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            rectangle1.topLeftXPos + rectangle1.width > otherRectangle.topLeftXPos &&
            rectangle1.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            rectangle1.length + rectangle1.topLeftYPos > otherRectangle.topLeftYPos) {
            return true;
        } 
        else {
            return false;
        }
    } 
}

rectangle.collides = this.collides;

let rectangle1 = new rectangle(5, 5, 50, 50)
let otherRectangle = new rectangle(20, 10, 10, 10)

console.log("first rectangle :", rectangle1)
console.log("second rectangle :", otherRectangle)
console.log(rectangle1.collides(otherRectangle))