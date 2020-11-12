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
const array3=[3,5,7,9];
console.log(array3.includes(5));

const pets = ['cat', 'dog', 'rat'];
console.log(pets.includes('rat'));
console.log(pets.includes('at'));

let arr5=['a', 'b', 'c'];
console.log(arr.includes('c', 3));  //false becoz 'c' is at 2 position not 3 position
//------------------------------------------------------------------------------------------------------
//indexOf method : returns firest element at which the a given eleemnt can be found
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));  //1

const arr6 = [2,9,9];
console.log(arr6.indexOf(2));  //0
console.log(arr6.indexOf(7));  //-1
console.log(arr6.indexOf(9, 2));  //2
console.log(arr6.indexOf(2, -1));  //-1
console.log(arr6.indexOf(2, -3));  //0

//find all occurens of an element
var indices = [];
var arr7 = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = arr7.indexOf(element);
while(idx != -1){
    indices.push(idx);
    idx = arr7.indexOf(element, idx+1);
}
console.log(indices);

const sort = [1,3,2,6,2,4,2];
var empty =[];
var ele = 2;
var idx = sort.indexOf(ele);
while(idx != -1){
    empty.push(idx);
    idx = sort.indexOf(ele, idx + 1);
}
console.log(empty);
//-----------------------------------------------------------------------------
//join() : craetes and returns a new string by combaining all the elements in an array.
const elements = ['fire', 'air', 'water'];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join(" "));
console.log(elements.join("-"));
//---------------------------------------------------------------------------------------
//keys method : returns a new Array iterator object that conatins the key for each index in the array.
const arraay = ['a', 'b', 'c'];
const iterator = arraay.keys();
for(const key of iterator){
    console.log(key);
}
//----------------------------------------------------------------------------------------------
//map():creates a new array populated with the results of calling a provided function on every element in the calling array.
const arraymap = [1,4,3,5];
const resfunc = arraymap.map(array => array*2);
console.log(resfunc);

const numberss = [1,4,9];
const resnums = numberss.map(num => Math.sqrt(num));
console.log(resnums);
//using map reformating the array objects
const kvarray = [{key:1, value:10},
                {key:2, value:20},
                {key:3, value:30},];
const reformat = kvarray.map((obj) => {
    let robj={};
    robj[obj.key] = obj.value;
    return robj;
})
console.log(reformat);

//mapped array contains undefined
let numb = [1,2,3,45];
let filteredItem = numb.map((num, index) => {
    if(index < 3)
    return num;
})
console.log(filteredItem);
//------------------------------------------------------------------------------------------
//pop() : removest the last elements from an array and returns that element so, it changes the lengthn of an array
const food = ['broccoli', 'kale', 'cauliflower','cabbage', 'celery'];
console.log(food.pop());  //celery
console.log(food);  //remaining length of an array
console.log(food.pop());  //cabbage
console.log(food);
//---------------------------------------------------------------------------------------------
//push() : used to add the elements at end of an array and returns the new array length 
const animals = ['cow', 'bufflao', 'tiger','goat'];
console.log(animals.push('lion'));
console.log(animals);
console.log(animals.push('pigs', 'girafee','monkey','donkey'));
console.log(animals);

const veggies = ['potato', 'carrot'];
const moreveg = ['celery', 'kale'];
console.log(veggies.concat(moreveg));  //merging two arrays using concat
Array.prototype.push.apply(veggies,moreveg);  //merging two arrays using apply method
console.log(veggies);
//------------------------------------------------------------------------
//reduce() : executes the reducer function on each element of an arry and results in the single output value.
const example = [2,5,7,9,12];
const reducer = (accumalator, currentValue) => accumalator+currentValue;
console.log(example.reduce(reducer));
console.log(example.reduce(reducer, 10));

let initialValue = 0;
const sum = [{x:1},{x:2}, {x:3}].reduce((accumalator, currentValue) => {
    return accumalator+currentValue.x;
}, initialValue)
console.log(sum);

//flattened array of arrays:
let flattened = [[1,2], [3,4], [5,6]].reduce((accumalator, currentValue) => 
     accumalator.concat(currentValue)
,[])
console.log(flattened);

//counting instances ofvalues in an objec:
let names = ['Alice', 'Bob','Tiff', 'Bruce', 'Alice'];
let countedNames = names.reduce((allNames, name) => {
    if(name in allNames){
        allNames[name]++
    }else{
        allNames[name]=1;
    }
    return allNames;
}, {})
console.log(countedNames);
//--------------------------------------------------------------------------------------------------
//reverse() : reverses an array in place, first element becomes last and last becomes first and it changes the original array
const exam = ['one', 'two', 'three'];
console.log(exam.reverse());
//-----------------------------------------------------------------------------------------------
//shift() : removes the first element in the array and returns the removed elemnt and lenth of array
const ex= [2,4,6,8,12,14,16];
console.log(ex.shift());
console.log(ex);
console.log(ex.shift());
console.log(ex);
//------------------------------------------------------------------------------------------
//slice(): returns a shollw copy of array into a new array like object from statr index to end index
const petss = ['cat', 'dog', 'snake', 'rat', 'tortise'];
console.log(petss.slice(1,3));
console.log(petss.slice(2));
console.log(petss.slice(1,7));
//---------------------------------------------------------------------------------------------------
//sort(): sorts the elemnts of an array in place and returns sorted array.
const months = ['dec', 'oct', 'nov', 'jan','sep'];
console.log(months.sort());

const simple = [1,30,46,21,10000000];
console.log(simple.sort());

let duplicate = [4,2,5,1,3,4];
console.log(duplicate.sort());
duplicate.sort((a,b)=>a-b);
console.log(duplicate);

const itemss = [
    {name:'Edward', age:23},
    {name:'Bruce', age:23},
    {name:'Alice', age:23},
    {name:'john', age:23},
    {name:'dimple', age:23}
];
//sort by age
itemss.sort((a, b)=>{
    return a.age - b.age;
})
//sort by nmae:
itemss.sort((a,b) => {
    var nameA = a.name.toLowerCase();
    var nameB = a.name.toLowerCase();
    if(nameA > nameB){
        return 1
    }
    if(nameA < nameB){
        return 1
    }
    return 0;
});
//----------------------------------------------------------------------------------
//splice() : method changes the content of array by removing or replacing the existing elements 
const mon = ['jan', 'apr', 'mar', 'june'];
mon.splice(1,0,'feb');
console.log(mon);
mon.splice(4,1,'oct');
console.log(mon);
mon.splice(2,0,'jan');
console.log(mon);
mon.splice(3,1);
console.log(mon);
mon.splice(2);
console.log(mon);
mon.splice(0,2,'parrot','anemone', 'blue');
console.log(mon);
//--------------------------------------------------------------------------------------------------
//toLocalString(): returns a string representing elementsof an array, and converted to strings using toLocalString
const array9 = [1,'a', new Date('21 Dec 1993 13:23:00 UTC')];
let final = array9.toLocaleString('en', {timezone:'UTC'});
console.log(final);
//--------------------------------------------------------------------------------------------
//toString() : returns a string representing the specifiedarray and its lemenets
const arr9 =[1,2,'c','2f'];
console.log(arr9.toString());
//------------------------------------------------------------------------------------------------
//unshift() : method add one or more elements at front of an array
const arr8 = [1,3,5];
arr8.unshift(12);
arr8.unshift(-2,-1);
console.log(arr8);