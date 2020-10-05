//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
//"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

//given a string reverse a each word in the sentence?

//First method using built-in functions
var string = "hello welcome to the javascript learnings";

var reverseEntireSent = reverse(string, "");
var reverseEachWord = reverse(reverseEntireSent, " ");
console.log(reverseEachWord);

function reverse(string, separator){
    return string.split(separator).reverse().join(separator);
}


//---------------------------------------------------------------
//split() : splits a String object into an array of string by separating the string into sub strings.
//reverse() : The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//join() : The join() method joins all elements of an array into a string.
var string = "hello";
function rev(string){
    return string.split("").reverse().join("");
}
console.log(rev(string));

//second method using loop
function reverseStr(str){
    var newString = "";
    for(let i=str.length-1; i >=0 ; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr("prathyusha"));

//third method with recursion
function revString(str){
    if(str === "")
    return ""
    else
    return reverseStr(str.subStr(1)) + str.charAt(0);
}
console.log(reverseStr("kurigala"));