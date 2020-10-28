class Rectangle {
    constructor(height, width){
        this.height = heigth;
        this.width = width;
    }
    constructor(width){
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.heigth * this.width;
    }
}

const square = new Rectangle(20, 50);
console.log(square.area);