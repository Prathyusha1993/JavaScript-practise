// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr.forEach(array => {
//     setTimeout(function(){
//         console.log(array);
//     }, 1000);
// });

// arr.map(arra =>{
//     setTimeout(function(){
//         console.log(arra)
//     }, 3000);
// });

// //---------------------------------------------------------------------------------
var Person = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

person = new Person('john', 'deo', '45');

Person.prototype.sayHello = function(){
    console.log("Hello " + this.firstName + " " + this.lastName);
};
person.sayHello();
// //---------------------------------------------------------------------------------
var person = {
    firstName: 'John',
    lastName: 'Deo',
    age:34
};

person.sayHello = function(){
    console.log("Hello " + this.firstName + " " + this.lastName)
}

person.sayHello();    //both waysare corect
// //----------------------------------------------------------------------------------
// //1.program to check whether the number is even or odd?
function check(num){
    if(num % 2 == 0){
        console.log("the num is even " + num);
    }else{
        console.log("the num is odd "+ num);
    }
}
check(94);
//-----------------------------------------------------------------------------------
//explain what a callback function is nd provide a sample example?
//callback functions are functions that are passed to another function as arguments to be executed later
//callback functiions canbe synchronous and asynchronous
function modifyArray(arr, callback){
    arr.push(10);
    callback();
}
var arr = [1,2,3,4,5];

modifyArray(arr, function(){
    console.log("array has been modified", arr);
});

//callback function examples
function modify(string, callback){
    var change = string.indexOf('t');
    console.log(change);
    callback();
}

var string = "prathyusha";
modify(string, function(){
    var last = "kurigala";
    var res = string.concat(last);
    console.log(res);
})

//another example
let numbers = [1,2,3,5,4,7,8,9];
let oddNumbers = numbers.filter(function(number){
    return number % 2;
})
console.log(oddNumbers);

//-----------------------------
function sample(string, arr, callback){
    var res = string.substring(1,4);
    console.log(res);
    var res1 = arr.filter(function(array){
        return array > 40;
    })
    console.log(res1);
    callback();
}
var arr= [23,45,67,54,32,21];
var string = "prathyusha";

sample(string, arr, function(){
    var last = "kurigala";
    console.log(string.concat(last));
})
//--------------------------------------------------------------------------------------
