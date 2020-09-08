function wordReverse(string) {
  //eidoof ma i - i ma eidoof
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(wordReverse("i am foodie"));

//-------------------------------------------------------
//split method

const str = "the quick brown fox jumps over the lazy dog.";

const word = str.split("");
console.log(word);

const word1 = str.split(" ");
console.log(word1);

const words = str.split(" ");
console.log(words[3]);

const char = str.split("");
console.log(char[8]);

const strCpy = str.split("");
console.log(strCpy);

//-----------------------------------------------------------------
//reverse method reverses an array in place, the first element becomes last and last becomes first

const arr = ["one", "two", "three"];
console.log(arr.reverse());

//-----------------------------------------------------------------
//join method

const elements = ["fire", "air", "water"];

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join(" "));

//--------------=======================================================================

var str = 'prathyusha';
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));

///-----------------------------------------------------------------

function rev(string){
const revArr = [];
const length = string.length-1;
for(let i=length; i>=0; i--){
  revArr.push(string[i]);
}
return revArr.join('');
}
console.log(rev("intuit"));

