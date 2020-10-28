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