//using functions
function Bike(model, color){
    this.model = model;
    this.color = color;
}
Bike.prototype.getDetails = function(){
    return this.model + 'bike has' + this.color + 'color;'
};

//-------------------------------------------------
//using classes
class Bike1 {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    getDetails(){
        return this.model+'bike has'+this.color+'color';
    }
}