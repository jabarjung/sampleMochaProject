class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter methods
  get area() {
    return this.calcArea();
  }
  // Methods
  calcArea() {
    return this.height * this.width;
  }
  // isItSquare
  isItSquare() {
    if (this.height === this.width){
      return true;
    }
    else {
      return false;
    }
  }
}
module.exports = Rectangle;