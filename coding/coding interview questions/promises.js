//A Promise a an object that returns th ersponse.
//it has three states: pending, fulfilled and rejected.

//why Promises?
//Proomises are used to handle asynchronous operations. they provide an altenative apporach for callbacks by reducing the 
//call hell and writing cleaner code.


//what is callback functions?
//A callback is a function passed into another funuction as an argument.
//this function is invoked inside the outer function to complete an actin.

//why do we need callbacks?
//js is event driven language so instead of waiting for a response js will keep executing while listening for other events.
//so callbacks are used in a way to make sure taht certain code doesn't execute untill the other
//code finishes.

//syntax of promises:
const promise1 = new Promise((resolve, reject) => {
    //promise description
})

//usage of promise:
const promise = new Promise((resolve, reject) => {
    const name='Prathyusha';
    const name1='Prathyusha';
    if(name === name1){
        resolve();
    }else{
        reject();
    }
})
promise.then(function(){
    console.log('success');
}).catch(function(){
    console.log("error");
})

//---------------------------------------------------------------------------------------------------
var isMomHappy = true;
const willGetGift = new Promise((resolve, reject) => {
    if(isMomHappy){
        var phone = {brand:'iphone', color:'pink'};
        resolve(phone);
    }else {
        var reason = new Error("Mom is not happpy");
        reject(reason);
    }
})

var showoff = function(phone){
    return new Promise((resolve, reject) => {
        var message = "Hey my new phone which was givwnby my mom is " + phone.brand + " with " + phone.color + " color";
        resolve(message);
    })
}

willGetGift.then(showoff)
.then(function(fulfilled){
    console.log(fulfilled);
}).catch(function(rejected){
    console.log(rejected.message);
})

//------------------------------------------------------------------------------------------------------------------------
//Promise chaining:
//the process of executing a squence of asynchronous task one after the another using promises is called as promise chaining.
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
}).then(function(result){
    console.log(result);  //1
    return result*2;
}).then(function(result){
    console.log(result);  //2
    return result*3;
}).then(function(result){
    console.log(result);  //6
    return result*4;
})

const final = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
}, reject => {
    var message = new Error("error occured");
})
final.then(function(result){
    console.log(result);  //1
    return result*5;
}).then(function(result){
    console.log(result);  //5
    return result*6;
}).then(function(result){
    console.log(result);  //30
    return result*7;
})

//----------------------------------------------------------------------------------------------------
//promise.all :
//Promise.all is a promise that takes an arrayof promises as an input and it gets resolved when all the promise
//get resolved or any one of them gets rejected.
//syntax
Promise.all({promise1, promise2, promise3}).then((result) => {
console.log(result)
}).catch(error => {console.log(`error in promise ${error}`)})