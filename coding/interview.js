// //write a code to get the data from API?
// const getData = (key) => {
//   fetch("url")
//     .then((response) => response.json())
//     .then(console.log);
// };
// const key = "somekey";
// getData(key);

// //return the result of asynchoronous function and what are different ways to do?
// async function getMoviesAsync() {
//   var response = await fetch(
//     "https://www.omdbapi.com/?i=tt3896198&apikey=212bbf8a&r=json"
//   );
//   var data = await response.json();
//   return data;
// }

// async function promiseFunction() {
//   var response = await fetch(
//     "https://www.omdbapi.com/?i=tt3896198&apikey=212bbf8a&r=json"
//   );
//   var movies = await response.json();
//   return promiseFunction(movies);
// }

// getMoviesAsync().then((data) => console.log(data));
// promiseFunction().then((movies) => console.log(movies));
//----------------------------------------------------------------------
//code toprint the object key with value
let object = [
  {item:"a",
  value:"2b"},
  {item:"b",
  value:"2"},
  {item:"c",
  value:"a+2b"}
];
function printObj(object){
  let result = {};
  for(let key in object){
    console.log(object[key].item);
    result[object[key].item] = object[key].value;
  }
  result.a = result.b*2;
  result.c = result.a + (result.b*2);
  result.b = parseInt(result.b);
  console.log(result);
}
printObj(object);
//---------------------------------------------------------------------
//code to get sum nd product of given arg
function total(s,p){
 console.log(s+p);
 console.log(s*p);
}
total(5,5);
//method2
const arr = [1,2,3,4,5,6];
let s=0, p=1;

for(i=0;i<arr.length;i++){
  s += arr[i];
  p *= arr[i];
}
console.log('sum: ' +s + 'product:' +p);
//------------------------------------------------------------------
//program for Myname.foo()?
let Myname = {
  name: "Prathyuhsa",
  foo: function(age){
    return age;
  }
}

console.log(Myname.foo(26));
//--------------------------------------------------------------------
//reverse string
function reverse(string){
  return string.split("").reverse().join("");
}
console.log(reverse("hi how are you?"));
//---------------------------------------------------------------
//merge two arrays 
let arr1 = [0,2,4,6,8];
let arr2 = [1,3,5,7,9];
let final = arr1.concat(arr2);
console.log(final);

let final1 = [...arr1, ...arr2];
console.log(final1);
//----------------------------------------------------
//remove duplicates from string
const removeDup = (str) => {
  const arr3 = str.split("");
  const arr4 = [];

  arr3.forEach((el,i) => {
    if(!arr4.includes(el)){
      arr4.push(el);
    }
  });
  return arr4.join("").replace(",", "").replace("", " ");
};
console.log(removeDup("Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"));

const string = "mozilla";
console.log(string.length);