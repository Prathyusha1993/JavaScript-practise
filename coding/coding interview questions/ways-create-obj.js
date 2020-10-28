//simplest way of creating empty obj using obj constructor, now this is not recommended
var object = new Object();

//second craete any function and apply the new operator to create object instances
//fuunction constructor
function Person(name){
var object = {};
object.name = name;
object.age = 25;
return object;
}
var object = new Person("prathyush");
console.log(object);

//object literal syntax : 
var object = {};

//object's create method :
var object = Object.create(null);

//function constructo with prototypes
function Person1(){}
Person1.prototype.name = "Prathyu";
var obje = new Person1();
console.log(obje);

//ES6 class syntax : 
class Per {
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
}
var person =  new Per("roja", 67);
console.log(person);
