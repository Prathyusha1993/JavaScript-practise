const array = [];

array.push(1);
console.log(array);
array.push(2);
console.log(array);
array.pop();
console.log(array);

//---------------------------------------------------
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
console.log(mul(3)(4)(5));
console.log(mul(3)(2)(4));

//---------------------------------------------------------------------------
//how to empty array in js?
//method1
let arrayList = [1, 2, 3, 4, 45, 6, 7, 8, 9];
const anotherArray = arrayList;
arrayList = [];
console.log(anotherArray); //[1, 2, 3, 4, 45, 6, 7, 8, 9];
//method2
arrayList.length = 0;
console.log(arrayList);

//-----------------------------------------------------------------------------
const random = ["a", "b", "c", "d"];
console.log(typeof random);

if (Object.prototype.toString.call(random) === "[object Array]") {
  console.log("Array!");
}

//---------------------------------------------------------------------
//closure
function counter() {
  var counter = 0;
  return {
    add: function (increment) {
      counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at:" + counter;
    },
  };
}

var c = counter();
c.add(5);
c.add(4);

c.retrieve();

//----------------------------------------------------------------------------
//another example of closure
function createBase(num) {
  return function (N) {
    return num + N;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(20));
//--------------------------------------------------------------
function number(num) {
  return num % 1 === 0;
}

console.log(number(4));
console.log(number(23.2));
console.log(number(50));
//---------------------------------------------------------------
//callback func example
function modifyArray(arr, callback) {
  arr.push(100);
}

var arr = [1, 2, 3, 4, 5];
modifyArray(arr, function () {
  console.log("tis is modified array", arr);
});
console.log(arr);
//----------------------------------------------------------
//for loop
for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0;
  b = i % 5 == 0;
  // console.log(f ? "fizz" : b ? "buzz" : f ? (b ? "fizzbuzz" : "fizz") : i);
  console.log(f ? (b ? "fizzbuzz" : "fizz") : b ? "buzz" : i);
}
//-------------------------------------------------------
//duplicate
let sample = [1, 2, 3, 4, 5];

let duplicate = sample.concat(sample);
console.log(duplicate);
//-------------------------------------------------------------
//retur true if they are anagram of one another
//anagram example : iceman - cinema rearranging the word iceman letters into another word as cinema
let firstWord = "Mary";
let secondWord = "Army";

function isAnagram(first, second) {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split("").sort().join(""); //'m' 'a' 'r' 'y' -> 'a''m''r''y' -> amry
  b = b.split("").sort().join(""); // 'a''r''m''y' -> 'a''m''r''y' -> amry

  return a === b;
}

isAnagram(firstWord, secondWord);

//sort()
let months = ["oct", "sep", "mar", "dec"];
months.sort();
console.log(months);
//-------------------------------------------------------------
var y = 1;
if (1) {
  function f() {}
  y += typeof f;
}
console.log(y);
//---------------------------------------------------------------
(function () {
  var a = (b = 5); //var a=b; b=5
})();

console.log(b);
//--------------------------------------------------
//multiply(5)(6)
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

console.log(multiply(5)(6));
