//let - block scope which can be updated but not redeclared
let counter = 30;
if(counter === 30){
    let counter = 31;
    console.log(counter);
}
console.log(counter);

//-----------------------------------------------------
//var and let : 
function userDetails(username){
    if(username){
        console.log(salary);
        console.log(age);
        let age = 30;
        var salary = 20000;
    }
    console.log(salary);
    console.log(age);
}

//=-----------------------------------------------------------------
//how to redeclare the variables in switch block without an error

// let count = 1;
// switch(count) {
//   case 0:
//     let name;
//     break;

//   case 1:
//     let name; // SyntaxError for redeclaration.
//     break;
// }


let count = 1;
switch(1){
    case 0: {
        let name;
        break;
        }   
    case 1: {
        let name;
        break;
    }
}
//---------------------------------------------------------------------------
//temporal dead zone: it's a behaviour that occurs when declaring the variables using let and const, but not with var,
//acccesing let and const keywords before declaring them causes referncee error
//timespan between creation of variable and declssring that varable is aclled temporal dead zone

function deadzone(){
    console.log(counter1); //undefined
    console.log(counter2); //reference eroor
    let counter1 = 45;
    var counter2 = 32;
}
console.log(deadzone());
//---------------------------------------------------------------------------------------
//IIFE : immediately invoked function experssions: variables declared within IIFE cannot be accessed outside of the world then it throws an error
(function () {
    var message ="IIFE";
    console.log(message);
}
)();
console.log(message); //error message is not defined.