// Rectangle.js
class Rectangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    isRightSizes(){
        return this.a < 1 || this.b < 1 ? false : true;
    }
  
    isSquare() {
        if(this.a === this.b){
            return true;
        }
        return false;
    }
  
    getArea() {
        return this.a * this.b;
    }
  
    getPerimeter() {
        return (this.a + this.b) * 2;
    }
  }
  
module.exports = Rectangle;
  