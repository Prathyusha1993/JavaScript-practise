//merge two soretd arrays into one sorted array
const arr1 = [1,5,7];
const arr2 = [2,4,9];
console.log(arr1.concat(arr2));

//second method using loop
function push(fromArray, toArray){
    for(let i=0, len=fromArray.length; i<len; i++){
        toArray.push(fromArray[i]);
    }
    return toArray;
}
var arr = [2,4,5,6,7];
var arr3 = [1,4,6,8,9];
var arr4= [];
push(arr, arr4); 
console.log(push(arr3, arr4));

//third method using spread operator :
let res = [...arr1, ...arr2];
console.log(res);

let res1=[];
res1.push(...arr1, ...arr2); 
console.log(res1);

//fourth mehod using reduce()
var ar = ['a','b', 'c'];
var ar1 = [1,3,5];
var ar2 = ar1.reduce((newArray, value) => {
    newArray.push(value);
    return newArray;
}, ar);
console.log(ar2);
