//String : srings are useful for holding data that can be represented in text form
//length : length property of string object contains the length of string
const str = 'Life,the universe ansd everthing.';
console.log(`${str} length: ${str.length}`);

const x = 'Mozilla';
let empty = '';
console.log("the length of x is"+x.length);
console.log("length of empty is" + empty.length);
x.length = 4; //.length property has no observable effect in strings.
console.log(x);
//--------------------------------------------------------------------------------------------------
//charAt() : returns a new string consisiting of single UTF-16 code unit located at specified offset into string
const sentence = 'the quick brwon fox jmps over the lazy dog.';
const index=10;
console.log(`the character at index ${index} is ${sentence.charAt(index)}`);

var anyString = "Brave new world";
console.log("the character at index 0 is "+ anyString.charAt()); //if no index is passed it will take as 0.
console.log(anyString.charAt(1));
console.log(anyString.charAt(2));
console.log(anyString.charAt(3));
console.log(anyString.charAt(4));
console.log(anyString.charAt(99));
//--------------------------------------------------------------------------------------------------------
//charCodeAt() : returns an integer between 0 and 65535 reperesenting UTF-16 code unit at given index.
console.log(`the character at index ${index} is ${sentence.charCodeAt(index)}`);
console.log('ABC'.charCodeAt(0));
console.log('ABC'.charCodeAt(1));
console.log('ABC'.charCodeAt(2));
//-----------------------------------------------------------------------------------------------------------
//concat() : retuns anew string by concateting one or more strings
const str1="Hello";
const str2="World";
console.log(str1.concat(' ', str2));
console.log(str2.concat(',', str1));

let hell = 'hello,';
console.log(hell.concat(" prathyusha how are you?"));
let greet = ['hi', ' ', 'Kiran', '!'];
console.log("".concat(...greet));
console.log("".concat({}));
console.log("".concat([]));
console.log("".concat(null));
console.log("".concat(true));
console.log("".concat(4, 5, 6, 7,8));
//------------------------------------------------------------------------------------------------
//endsWith() : checks at the end of string whether it is character or not if charccter returns true orelse returns false
const string = "this is my happy place";
console.log(string.endsWith('place', 22));
console.log(string.endsWith('is', 12));

let str3 = 'is this a question';
console.log(string.endsWith('?'));

let str4="To be, or not to be, that is the question.";
console.log(str4.endsWith('question.'));
console.log(str4.endsWith('to be'));
console.log(str4.endsWith('to be', 19));
//---------------------------------------------------------------------------------------------------------
//includes() : returns true or false, determines whether one string may be found within another string 
const sent = "The quick brown fox jumps over the lazy dog";
console.log(sent.includes('dog'));
console.log(sent.includes('lady'));
console.log(sent.includes('overall'));

console.log(str4.includes('to be'));
console.log(str4.includes('To be'));
console.log(str4.includes('question and answer'));
console.log(str4.includes('To be', 1));
console.log(str4.includes('TO BE'));
console.log(str4.includes(''));
//-------------------------------------------------------------------------------------------------------
//indexOf() : 