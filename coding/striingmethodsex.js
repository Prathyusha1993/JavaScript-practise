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
//indexOf() : returns the index within the calliing string object of first occurence of specified value and returns -1 if not ofund
const paragraph = "The quick brown fox jumps over the lazy dog.";
console.log(paragraph.indexOf('dog'));

console.log('hello world'.indexOf(''));
console.log('hello world'.indexOf('', 0));
console.log('hello world'.indexOf('', 3));
console.log('hello world'.indexOf('', 8));
console.log('Blue Whale'.indexOf('Blue'));
console.log('Blue Whale'.indexOf('Blute'));
console.log('Blue Whale'.indexOf('Whale', 5));
console.log('Blue Whale'.indexOf('Whale', 0));
console.log('Blue Whale'.indexOf('Whale', 7));
console.log('Blue Whale'.indexOf('blue'));   //case sentive
//checking the occurance while using indexOf()
'Blue Whale'.indexOf('Blue') !== -1  //true
'Blue Whale'.indexOf('Bloe') !== -1  //false

const str5 = "brave new world";
console.log(str5.indexOf('w'));
console.log(str5.indexOf('new'));

const myString    = 'brie, pepper jack, cheddar'
const myCapString = 'Brie, Pepper Jack, Cheddar'
console.log(myString.indexOf('cheddar'));
console.log(myCapString.indexOf('cheddar'));  
console.log(myCapString.indexOf('Pepper'));

//count occurance of a leter in atring
const str6 = "To be, or not to be, that is the question.";
let count = 0;
let position = str6.indexOf('e');
while(position !== -1){
    count++;
    position =  str6.indexOf('e', position+1)
}
console.log(count);  //4
console.log(str5.indexOf('w'));
console.log(str5.lastIndexOf('w'));
console.log(str5.indexOf('new'));
console.log(str5.lastIndexOf('new'));
//-----------------------------------------------------------------------------------------------
//localeCompare() : returns a number indicatng whether a refernce stirng comes before, sfter or same as givrn string
console.log('a'.localeCompare('c)'));
console.log('check'.localeCompare('against'));
console.log('a'.localeCompare('a'));
//----------------------------------------------------------------------------------------------
//match() : retrieves the result of matching a string against a regular expression
const para = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = para.match(regex);
console.log(found);
//------------------------------------------------------------------------------------
//padEnd() : method pads the current string with a igven stringso that theresulting string reaches a givn length
//The padding is applied from the end of the current string.
const string2 = "Breaded Mushrooms";
console.log(string2.padEnd(25,'.'));

console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, 'foo'));
console.log('abc'.padEnd(6, '123456'));
console.log('abc'.padEnd(1));
//-----------------------------------------------------------------------------------------------
//padStart() :  method pads the current string with another string until the resulting string reaches the given length. The padding is applied from the start of the current string.
const string3 = "5";
console.log(string3.padStart(2, '0'));

const fullnum = '237654934895394';
const lastnum = fullnum.slice(-4);
const result = lastnum.padStart(fullnum.length, '*');
console.log(result);

console.log('abc'.padStart(10));
console.log('abc'.padStart(10, 'foo'));
console.log('abc'.padStart(6, "234567"));
console.log('abc'.padStart(8,"0"));
console.log('abc'.padStart(1));
//---------------------------------------------------------------------------------------------
//repeat() : returns a new string which containes a specified numbr of copies of string
const char = "I am really scared of my future. ";
console.log(char.repeat(4));

//console.log('abc'.repeat(-1));  //invalid count value as error
console.log('abc'.repeat(0));
console.log('abc'.repeat(1));
console.log('abc'.repeat(2));
console.log('abc'.repeat(3.5));   //converted to integer
//console.log('abc'.repeat(1/0));  //invalid count value as error
//----------------------------------------------------------------------------------------------------
//replace() : method ular returns a new string with samll or matches of paterns 
//pattern can be reg experssion
const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
const regexx = /dog/gi;
console.log(p.replace(regexx, 'cat'));

let strr = 'Twas the night before Xmas...!';
let newstr = strr.replace(/xmas/i, 'chirstmas');  //i is for ignore
console.log(newstr);

let re = /apples/gi;  //g is global and i is ignore
let strr1 = 'Apples aer round and apple come in differents colors';
let newStr = strr1.replace(re, 'oranges');
console.log(newStr);

//switching words in a string
let reg = /(\w+)\s(\w+)/;
let nameStr = 'Prathyusha Kurigala';
let newStrr = nameStr.replace(reg, '$2, $1');
console.log(newStrr);
//-------------------------------------------------------------------------------------
//search() : method executes a search for amatch bewtween regular experssion and this sstring object
const paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regexp = /[^\w\s]/g;  //any character that is not word character or whtespacce
console.log(paragraph1.search(regexp));
console.log(paragraph1[paragraph1.search(regexp)]);

let exp = /[A-Z]/g;
let ex = /[.]/g;
const strrr = 'hey JudE';
console.log(strrr.search(exp));
console.log(strrr.search(ex));  //if not present returns -1 '.' is not present in strrr
//---------------------------------------------------------------------------------------------------
//slice() :extracts a section of a string and returns a new string without modifying the original string
const demo = "The quick brown fox jumps over the lazy dog.";
console.log(demo.slice(32));
console.log(demo.slice(4,19));
console.log(demo.slice(-4));
console.log(demo.slice(-9, -5));

let sample = "The morning is upon us.";
console.log(sample.slice(1,8));
console.log(sample.slice(4,-2));
console.log(sample.slice(30));
console.log(sample.slice(12));
console.log(sample.slice(-3));
console.log(sample.slice(-1));
console.log(sample.slice(-3, -1));
console.log(sample.slice(0,-1));
console.log(sample.slice(11, -7));
//------------------------------------------------------------------------------------------------
//split() : divides he string into an ordered list of substrings, and puts them into a new array and returns an array
const string9 = "its sun set time lets go to beach";
let words = string9.split(' ');
console.log(words[3]);

let charac = string9.split('');
console.log(charac[9]);

let sentenc = string9.split();
console.log(sentenc);

//returning limited number of splits
const myString1 = "hello whats up how are you doing?";
console.log(myString1.split(' ', 3));
//------------------------------------------------------------------------------------------------
//startsWith() : method determines whether a string begins with charater of specified stringreturning true or false
const line = 'planning for future from now onwords is good in few things';
console.log(line.startsWith('plan'));
console.log(line.startsWith('plan', 3));
//-------------------------------------------------------------------------------------------------------------
//substring() : returns the part of string between start and end indexes
const name = "Prathyusha";
console.log(name.substring(1, 5));
//--------------------------------------------------------------------
//toLowerCase() : rerurns string value converted to lower case
const lines = "This is My happy Place";
console.log(lines.toLowerCase());
console.log('ALPHABET'.toLowerCase());
//-----------------------------------------------------------------------
//toUpperCase() : returns the string value converted to upper case
console.log(lines.toUpperCase());
console.log('alphabet'.toUpperCase());
//----------------------------------------------------------------------------------------------
//toString() : method returns a string represtening the specified object
const stringObj = new String('foo');
console.log(stringObj);
console.log(stringObj.toString());  //displays string value of string object

var y = new String('Hello world');
console.log(y.toString());
//------------------------------------------------------------------------------------------------
//trim() : used to remove the whitespaces from both ends of a string
const greetings = "       Hello World hi            ";
console.log(greetings.trim());
//--------------------------------------------------------------------------------------------
//trimEnd()/trimRight(): remove the whitespaces from end of a string
console.log(greetings.trimEnd());
//-----------------------------------------------------------------------------------
//trimStart()/trimLeft() : removes the whitespaces from start of string
console.log(greetings.trimStart());
//------------------------------------------------------------------------------------------------------
//apply() : methods calls a function with a given this value and arguments provided as ana rray
const numbers = [5,6,7,8,9];
const max = Math.max.apply(null, numbers);
console.log(max);
const min = Math.min.apply(null, numbers);
console.log(min);
//----------------------------------------------------------------------------------------------
//call() : methods callas a function with given this values and arguments provided
function Product(name, price){
    this.name = name;
    this.price = price;
}
function Food(name, price){
    Product.call(this,name,price);
    this.category = 'food';
}
console.log(new Food('cheese', 5).name);