
function Vehicle(model, color, year, country){
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

var car = Vehicle('Honda', 'White', 2020, "UK");
console.log(car);