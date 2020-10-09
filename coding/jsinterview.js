//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
//"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

//given a string reverse a each word in the sentence?

//First method using built-in functions
var string = "hello welcome to the javascript learnings";

var reverseEntireSent = reverse(string, "");
var reverseEachWord = reverse(reverseEntireSent, " ");
console.log(reverseEachWord);

function reverse(string, separator){
    return string.split(separator).reverse().join(separator);
}


//---------------------------------------------------------------
//split() : splits a String object into an array of string by separating the string into sub strings.
//reverse() : The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//join() : The join() method joins all elements of an array into a string.
var string = "hello";
function rev(string){
    return string.split("").reverse().join("");
}
console.log(rev(string));

//second method using loop
function reverseStr(str){
    var newString = "";
    for(let i=str.length-1; i >=0 ; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr("prathyusha"));

//third method with recursion
function revString(str){
    if(str === "")
    return ""
    else
    return reverseStr(str.subStr(1)) + str.charAt(0);
}
console.log(reverseStr("kurigala"));

//-----------------------------------------------------------
//how to check if object is array or not?
var arrayList = [1,3,5,7,9];
console.log(typeof(arrayList));
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
}
//If you are using jQuery then you can also used jQuery isArray method:
//Array.isArray is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5
// if($.isArray(arrayList)){
//     console.log("array");
// }else {
//     console.log('Not an array');
// }

//How to make array as empty in javacript
var array = [1,22,33,4,55];
console.log(array);
var array = []; //method 1
console.log(array);
array.length = 0; //method2
array.splice(0, array.length);

//how to check if num is an integer?
function check(num){
    return num % 1 === 0;
}
console.log(check(4));
console.log(check(12.2));
console.log(check(34.5));
console.log(check(40));

//--------------------------------------------------------------
//make this work duplicate([1,2,3,4,5]); -> [1,2,3,4,5,1,2,3,4,5]
function duplicate(array){
    return array.concat(array);
}
console.log(duplicate([1,2,3,4,5]));

//-------------------------------------------------------------------------------------------
//closure example
function mul(x){
    return function (y){  //annonymous function
        return function (z){  //annonymous function
            return x*y*z;
        }
    }
}
console.log(mul(2)(3)(4));
console.log(mul(12)(13)(24));

//--------------------------------------------------------------------------------------------
function createBase(ele){
return function(N){
    return ele+N;
}
}
console.log(createBase(6)(10)) ;
console.log(createBase(6)(40)) ; //this can also be writeen as

var addSix = createBase(6);
console.log(addSix(10));

//------------------------------------------------------------------------------
//FizzBuzz challenge
//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
// "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for(var i=1; i <=100; i++){
    let f = i % 3 == 0,
    b = i % 5 == 0;
    console.log(f ? ( b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}

//-----------------------------------------------------------------------------------------
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array1: length" + arr1.length + " last=" +arr1.slice(-1));
console.log("array2: length" + arr2.length + " last=" +arr2.slice(-1));

//---------------------------------------------------------------------------------
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 ||  2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

//-----------------------------------------------------------------------------
var a = {},
b={key: 'b'},
c={key: 'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);
//--------------------------------------------------
console.log((function factorial(n){
   return ((n>1) ? n*factorial(n-1) : n) 
})(10)
)
//-----------------------------------------------------
// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);

//----------------------------------------------------------------------
var hero = {
    _name : 'John doe',
    getSecretidentity : function(){
        return this._name;
    }
}

var identity = hero.getSecretidentity;
console.log(identity());   //prints undefined becoa we are extractng the method from hero object, so identoty is being invoked in the global context(i.e is window object) where the name property doesnot exists 
console.log(hero.getSecretidentity());

//----------------------------------------------------------------------------
//testing 'this' knowledge in below example
var length = 10;
function fn(){
    console.log(this.length);
}
var obj = {
    length: 5,
    method : function (fn){
        fn();
        arguments[0]();  //it is used to access number of arguments injavascrpt function using srguments[] array.
        //is nothing but calling a fn().inside fn(), now, thescope of this funciron becomes arguments array adn logging the length
        //of arguments[] will return 2.
    }
};
obj.method(fn, 1);
//------------------------------------------------------------------------------
(function (){
    try{
        throw new Error();
    }catch(x){
        var x=1, y=2;  //inner x not the outer one, there is only one y, which is in the outer scope
        console.log(x);  //1
    }
    console.log(x); //undefined,  
    console.log(y); //2,   
})();
//---------------------------------------------------------------------------------------
var x=21;
var girl = function(){
    console.log(x);  //undefined
    var x=20;    //intialzations are not hoisted.
};
girl();
//-------------------------------------------------------------------------------
var obj = {a:1,b:2, c:{age:30}};
var objclone = Object.assign({}, obj);
console.log(objclone);
obj.c.age=43;
console.log(obj);
console.log(objclone);
//------------------------------------
console.log(typeof typeof 1); //string   typeof 1= "number" and number is string