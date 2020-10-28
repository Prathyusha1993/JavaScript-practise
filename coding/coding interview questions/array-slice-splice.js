//slice : returns a new array with selected elements in array.

const array = [1,2,3,4,5,6];
console.log(array.slice(2,5));
console.log(array.slice(0,2));
console.log(array.slice(5));

//splice :  can be used for both inserting/deleting the elements in array
let arr = ['cat', 'rat', 'fox', 'ant', 'dog', 'bee'];
console.log(arr.splice(0,2));
console.log(arr);
console.log(arr.splice(1, 0, "elephant"));
console.log(arr);
console.log(arr.splice(4, 1));
console.log(arr);
console.log(arr.splice(3, 1, 'tiger', 'lion', 'zebre'));
console.log(arr);
console.log(arr.splice(2));
console.log(arr);

//---------------------------------------------------------------------------------
//first-class-functions : meaans function in thst language are treated like any other variables
const handler = () => console.log('This is a click handlerf unction');
document.addEventListener('click', handler);

//------------------------------------------------------------------------
//first order functions : functions that won't accept another function as an argument and doen't return func as its return value
const firstOrder = () => console.log("I am forst order function");

//--------------------------------------------------------------------------
//higher order functions : funcs that accepts another function as an argument or returns a function value
const firstOrder1 = () =>  console.log("I am forst order function");
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);