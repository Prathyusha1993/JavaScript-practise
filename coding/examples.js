// var string1 = "Mary";
// var string2 = "Army";
var string1 = "Silent";
var string2 = "Listen";
// var string1 = "Prathyusha";
// var string2 = "kiran";
function isAnagram(string, str){
    var a = string.toLowerCase();
    var b = str.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}

console.log(isAnagram(string1, string2));

//------------------------------------------------------------------------------------
//closure example
var globalStr = "Prathyusha";
(function outer(outerArg){
    var x=10;
    var string = "dog";
    (function inner(innerArg){
        var y=20;
        var string1 = "cat";
        console.log(string.concat(string1));
        console.log(globalStr);
        console.log(outerArg);
        console.log(innerArg);
        var z = x*y;
        console.log(z);
    })("pinky");
})("Navitha");

//-------------------------------------------------------------------------------
(function counter(){
    var count = 0;
    (function inner(inc){
        count += inc;
        console.log(count);
    })(23);
})();
//---------------------------------------

function count(){
    var counter = 0;
    return {
        add : function(inc){
            counter += inc;
        },
        reterive : function() {
            return 'the counter is currently at:' + counter;
        }
    }
}
var c =count();
c.add(10);
c.add(20);

c.reterive();

//-------------------------------------=-------------------------------------------
var y=1;
if(function f(){}){
    y += typeof f;
}
console.log(y);  //1undefined

var k=1;
if(1){
    eval(function foo(){});
    k += typeof foo;
}
console.log(k); //1undefined

var k=1;
if(1){
    function foo(){};
    k += typeof foo;
}
console.log(k);  //1function
//---------------------------------------------------------------------------------------
// (function(){
//     var a=b=5;   //var a=b=5 => a=b; b=5
// })();
// console.log(b);
//------------------------------------------------------------------------------
//write a function taht ll allow you to do this  multiply(3)(4)
function multiply(x){
    return function(y){
        return x*y;
    }
}
console.log(multiply(3)(4));
//-----------------------------------------------------------------------------------
//create a private var in js?
// function fun(){
//     var priv = "secret code";
// }
// console.log(priv); //cannot access as if it throws an error.

function func1(){
    var priv = "secret code";
    return function(){
        return priv;
    }
}
var z = func1();
console.log(z());
//----------------------------------------------------------------------
//sort examples
const months = ['jan', 'oct', 'dec', 'aug', 'nov'];
months.sort();
console.log(months);

const array = [40, 28, 1, 10000001, 2000, 3];
array.sort();
console.log(array);

var numbers = [4,2,5,1,3];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);

var items = [
    {name : 'edward', value : 21},
    {name : 'pinky', value : 34},
    {name : 'kiran', value : 78},
    {name : 'navitha', value : 45},
    {name : 'joseph', value : 12},
];

//sort by value 
items.sort(function(a, b) {
    return a.value - b.value;
})
console.log(items);
//sort by names 
items.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if(nameA < nameB){
        return -1;
    }
    if(nameA > nameB){
        return 1;
    }
    if(nameA == nameB){
        return 0;
    }
})
console.log(items);