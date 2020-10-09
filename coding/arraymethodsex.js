let fruits = ['apple', 'mango', 'banana'];
console.log(fruits);
//----------------------------------------------------------------------------------------------------
//length : 
let clothing = ['shoes', 'shirts', 'makeup', 'pants'];
console.log(clothing.length);

const arr = [1,2];
console.log(arr);
arr.length=5;
console.log(arr);
arr.forEach(elem => console.log(elem));

//iterate over an array
const arr1 = [1,2,3,4,5,6,7];
for(var i=0; i<arr1.length; i++){
    arr1[i] *= 2;
}
console.log(arr1);  //2,4,6,8,10, 12, 14

//shortening an array
if(arr1.length > 3){
arr1.length = 3;}
console.log(arr1);
console.log(arr1.length);

//empty array of fixed length
var numbers = [];
numbers.length=4;
console.log(numbers);
//-------------------------------------------------------------------------------------------------
//from method : craetes a new shollow copied array instance from an array-like or iterable object.
console.log(Array.from('pinky'));
console.log(Array.from([1,2,3,4, ,5], x=> x+x));
//Array from a String
console.log(Array.from('foo'));
//Array from a set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));
//Array from a Map
const arrmap =new Map([[1,2,], [2,3,], [3,4]]);
console.log(Array.from(arrmap));
const mapper = new Map([[1,'a'], [2,'b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));
//Array from an array-like arguments
function f(){
return Array.from(arguments);
}
console.log(f(10,20,30,40));
//------------------------------------------------------------------------------------------------------------------
//isArray method : determines whether the passed value is array or not, ifits array return true or else false
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray([]));
console.log(Array.isArray({foo : 123}));
console.log(Array.isArray('geetha'));
console.log(Array.isArray(undefined));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('a', 'b', 'c','d')));
console.log(Array.isArray(null));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Array(3)));
//----------------------------------------------------------------------------------------------------
//Array.of method : creates a new array instance from a variable num of argumrnts
console.log(Array.of(7)); //create a new array with argument 7
console.log(Array.of(1,2,3,4));
console.log(Array(7)); //creates a array with 7 elements
//----------------------------------------------------------------------------------------------------
//concat method : returns a new array afetr merging one or more arrays
const array1 = [2,4,6,8];
const array2 = [1,3,5,7];
console.log(array1.concat(array2));
