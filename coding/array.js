//ES6
let arr = [1, 2, 3, 5, 9, 3, 5];
let arr1 = new Set(arr);
console.log(arr1);

//indexOf method usage
let array = ["a", "b", "a", "c", "b"];
array.indexOf("b");
array.forEach((c, index) => {
  console.log(`${c} - ${index} - ${array.indexOf(c)}`);
});

//using filter and indexOf method removing the duplicates
let array1 = ["a", "b", "a", "c", "b"];
let unique = array1.filter((c, index) => {
  return array1.indexOf(c) === index;
});

console.log(unique); //output: a, b, c

//----------------------------------------------------------------
//using filter and indexOf method removing the duplicates(different methd)
let array2 = ["a", "b", "a", "c", "b"];
let uniqueArr = [];
array2.forEach((c) => {
  if (!uniqueArr.includes(c)) uniqueArr.push(c);
});

console.log(uniqueArr);

//---------------------------------------------------------------------------------
//using filter and indexOf  prints what are the duplicate elements
let arr3 = ["w", "e", "t", "e", "w"];

let dupArr = arr3.filter((c, index) => {
  //w - 0 e-1 t-2 e-1 w-0
  return arr3.indexOf(c) !== index;
});
console.log(dupArr);
