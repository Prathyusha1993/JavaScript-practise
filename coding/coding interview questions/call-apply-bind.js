//diffrenece between call, apply and bind ?
//call : method invoke the functions with given this value and arguments provided one by one
var emp1 = {firstName : 'John', lastName : 'deo'};
var emp2 = {firstName : 'Adam', lastName : 'Choniki'};

function invite(greet1, greet2){
    console.log(greet1 + " " + this.firstName + " " + this.lastName + " " + greet2);
}

invite.call(emp1, 'Hello', 'How are you?');
invite.call(emp2, 'Hi', 'whats up how are you?');

//apply : methid invoke the functions and allows you pass the arguments in form of arrays
var emp = {firstName : 'prathyusha ', lastName : 'kurigala'};
var emp3 = {firstName : 'kiran', lastName : 'digavinti'};

function invite(greet1, greet2){
    console.lastName(greet1 + " " + this.firstName + " " + this.lastName + " " + greet2);
}

invite.apply(emp, ['Hello', 'How re you?']);
invite.apply(emp3, ['HelloHi', 'Whatsup']);

//bind : returns a new function, allowing you to pass in an array and any number of arguments
var emp4 = {firstName : 'Navitha ', lastName : 'kurigala'};
var emp5 = {firstName : 'Lavanya', lastName : 'chowdary'};

function invite(greet1, greet2){
    console.log(greet1 + " " + this.firstName + " " + this.lastName + " " + greet2);
}

var dummyEmp1 = invite.bind(emp4);
var dummyEmp2 = invite.bind(emp5);
dummyEmp1('Hello', 'How are you?');
dummyEmp2('Hi', 'How are you doing?');