var y = 1;
if(function f(){}){
    y += typeof f;
}
console.log(y);  //1undefined

console.log(typeof function f(){});
console.log(function f(){});
console.log(typeof f); //undefined

var x = 1
if(true){
    function f(){};
    x += typeof x;
}
console.log(x);  //1number