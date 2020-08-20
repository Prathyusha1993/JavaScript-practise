const arr = ["A", "B", "C", "D", "E"];

arr.forEach((array) => {
  setTimeout(function () {
    console.log(array);
  }, 5000);
});
//--------------------------------------------------------
//sort
var sample = [5, 4, 6, 3, 2, 1];
sample.sort();
console.log(sample);
sample.sort(function (a, b) {
  return a - b;
});
console.log(sample);
//----------------------------------------------------------------------
//given prob to find the smallest positive integer

//--------------------------------------------------------------------
//reducer method1
let sum = [10, 9, 8, 7, 6];
const reducer = (accumalator, currentValue) => accumalator + currentValue;
const total = sum.reduce(reducer);
console.log(total);
//method2
const fullAmount = sum.reduce(function (a, b) {
  return a + b;
});
console.log(fullAmount);
//method3
let sum1 = [10, 9, 8, 7, 6];
function total1(arr) {
  var b = 0;
  for (var i = 0; i < arr.length; i++) {
    b += arr[i];
  }
  console.log(b);
}

total1(sum1);
//-----------------------------------------------------------------------
//sum of frequency of in an array
let c = [1, 5, 2, 4, 6];
const freq = c.map((value) => {
  c.map((val) => {
    if (value + val === 7) {
      console.log(value + "" + val);
      c.push(value);
      c.push(val);
    }
  });
});
console.log("final", c);
console.log("final", new Set(c));
console.log("final", Array.from(new Set(c)));
//--------------------------------------------------------------------
//reverse a string
let string = "prathyusha"; //o/p:ahsuyhtarp
const modify = string.split("").reverse().join("");
console.log(modify);
//method2
function reverse(str) {
  var changed = "";
  for (i = str.length - 1; i >= 0; i--) {
    changed += str[i];
  }
  console.log(changed);
}
reverse(string);
//--------------------------------------------------------------
//sort the array by age and name
let person = [
  { name: "pinky", age: 37 },
  { name: "sara", age: 67 },
  { name: "navi", age: 45 },
  { name: "kiran", age: 30 },
];

person.sort(function (a, b) {
  return a.age - b.age;
});
console.log(person);
person.sort(function (a, b) {
  var nameA = a.name.toLowerCase;
  var nameB = b.name.toLowerCase;
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  return 0;
});
console.log(person);
