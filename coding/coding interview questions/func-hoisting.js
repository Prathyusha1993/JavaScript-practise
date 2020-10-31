//hoisting : n javascript it only hoists the declarations but not the intialzations

var car = new Vehicle('Honda', 'White', 2020, "UK");
console.log(car);

function Vehicle(model, color, year, country){
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
//----------------------------------------------------------------------------------
//variales can be declared after it has been used.

console.log(message);   //undefined
var message = "the variable has been hoisted";

var msg; //the above looks like this to the interperter
console.log(msg);
msg="the varaiblehas been hoisted";
//-------------------------------------------------------

y=5;
console.log(y);
var y;