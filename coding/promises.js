let promise = new Promise(function(resolve, reject){
    const x = "prathyusha";
    const y = "navitha";
    if(x== y){
        resolve();
    }else{
        reject();
    }
})
promise.then(function(){
    console.log('succes, you are prathyusha');
}).catch(function(){
    console.log('some error has occured');
})

//-------------------------------------------------------------
// var isMomHappy = true;

// var willIGetNewPhone = new Promise(function(resolve,reject){
//     if(isMomHappy){
//         var phone = {brand : 'iphone', color: 'black'};
//         resolve(phone);
//     }else{
//         var reason = new Error('moom is not happy');
//         reject(reason);
//     }
// })

// willIGetNewPhone.then(function(fulfilled){
//     console.log(fulfilled);
// }).catch(function(rejected){
//     console.log(rejected.message);
// })

//------------------------------------------------------------
//chaining
var isMomHappy = true;

var willIGetNewPhone = new Promise(function(resolve,reject){
    if(isMomHappy){
        var phone = {brand : 'iphone', color: 'black'};
        resolve(phone);
    }else{
        var reason = new Error('moom is not happy');
        reject(reason);
    }
})

var showOff = function(phone){
    return new Promise(function(resolve, reject){
        var message = 'Hey friend, I have a new' + phone.color+' '+ phone.brand + 'phone';

        resolve((message));
    }
    );
}

willIGetNewPhone.then(showOff)
.then(function(fulfilled){
    console.log(fulfilled);
}).catch(function(rejected){
    console.log(rejected.message);
})

//same above example using es6(fat arrow, let, const) and es7(async await)
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise in ES7 async await style
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

// async await it here too
(async () => {
    await askMom();
})();