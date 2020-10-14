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
//------------------------------------------------
//from method : craetes a new shollow copied array instance from an array-like or it-------------------------------------------------erable object.
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
//isArray method : determines whether the passed value is array or not, if its array return true or else false
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

const num1 = ['a', 'b', 'c'];
const num2 = ['d', 'e'];
const num3 = ['a', 'q'];
console.log(num1.concat(num2, num3));
//-----------------------------------------------------------------------------------------------
//fill method :  changes all the elements in an array to static values from start index(0) to end of index(array.length)
const values = [1,1,3,5,6];
console.log(values.fill(5,1,values.length)); //replace with 5 from index 1 to end of array length
console.log(values.fill(0,2));  //replace with 0 from  index 2
console.log(values.fill(6));   //replace with 6 
//-----------------------------------------------------------------------------------------------------
//filter methid : creates a new array with all elements that passes the test implememted by provided function
const words = ['limit', 'apple', 'exordinary', 'destruction', 'longlife'];
const result = words.filter(word => word.length > 6);
console.log(result);

let filtered = [4,80,5,64,32,2];
const res = filtered.filter(value => value > 10);
console.log(res);
//same above exapmle written using function
function removeSmall(value){
    return value > 10;
}
let filtered1 = [4,80,5,64,32,2].filter(removeSmall);
console.log(filtered1);
//find all the prime numbers in an array
const arra = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19];
function isPrime(num){
    for(let i=2;num>i;i++){
        if(num % i ==0){
            return false;
        }
    }
    return num >1;
}
console.log(arra.filter(isPrime));

let fruit = ['apple', 'mango', 'orange', 'banana', 'grapes'];
function filterItems(arr, query){
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(filterItems(fruit, 'ap'));
console.log(filterItems(fruit, 'an'));
//-----------------------------------------------------------------------------------------------
//find method : returns the value of first element in the provided array that satifies tje provided testing function
const arrayFind = [5,12,8,130,44];
const found = arrayFind.find(element => element > 10);
console.log(found);

const inventory = [{name:'grapes', quantity:5},
                    {name:'orange', quantity:2},
                    {name:'cherries', quantity:3}];
function isCherries(fruit){
    return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries));
//above example using arrow function and destructing
const search = inventory.find(({name}) => name === 'cherries');
console.log(search);

//seach for prime number in the array using find method
function isPrime(element, index, array){
    let start = 2;
    while(start <= Math.sqrt(element)){
        if(element % start++ <1)
        return false;
    }
    return element >1;
}
console.log([4,6,8,10].find(isPrime));
console.log([4,5,8,10].find(isPrime));
//--------------------------------------------------------------------------------------------------------------
//findIndex : methods returns index of first element in the array that satifies the provided test function.
const test = [5,8,130,44,22];
const res1 = (ele) => ele > 15;
console.log(test.findIndex(res1));  //2

//find the index of prime number in array
function isPrime(num){
    for(let i=2; num > i; i++){
        if(num % i == 0)
        return false;
    }
    return num >1;
}
console.log([4,6,8,9,12].findIndex(isPrime));  //return -1
console.log([4,6,7,9,12].findIndex(isPrime));  //returns 2

//find the index of fruit using arrow functions
const vegetables = ['ladyfinger', 'bendi','tomato'];
const index = (elem) => elem === 'bendi';
console.log(vegetables.findIndex(index));  //1
//------------------------------------------------------------------------------------------
//forEach method : executes the provided test function once for each array element.
const about = ['shoe', 'shocks','lays','leather'];
about.forEach(ele => console.log(ele));

const arraySparse = [1,3, ,7];
let callbackruns = 0;
arraySparse.forEach(ele => {console.log(ele)
callbackruns++;
})
console.log("callback:", callbackruns);

//converting a for loop to foreach loop
const sample = [2,4,6,8,10];
let copyItems = [];
//before
for(let i=0; i<sample.length ;i++){
    copyItems.push(sample[i]);
}
console.log(copyItems);
//after
sample.forEach(ele => {
    copyItems.push(ele);
})
console.log(copyItems);
//------------------------------------------------------------------------------------------------------
//includes method : determines whether the array includes a certain value among the entries, returning true or falase
