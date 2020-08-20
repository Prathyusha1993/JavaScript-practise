var globalVar = "z";

(function outerFunc(outerArg) {
  var outerVar = "x";
  (function innerFunc(innerArg) {
    var innerVar = "y";
    console.log(
      "outerarg = " +
        outerArg +
        "\n" +
        "outervar = " +
        outerVar +
        "\n" +
        "innerarg = " +
        innerArg +
        "\n" +
        "innerFunc = " +
        innerVar +
        "\n" +
        "globalvar = " +
        globalVar
    );
  })(5);
})(7);
//------------------------------------------------------
var outer1 = (function (x) {
  delete x; //delete operator isused to delete theobjects but not the local varable
  return x;
})(1);

console.log(outer1);
//-------------------------------------------------------
var employee = {
  company: "xyz",
};

console.log(employee.company);
// delete employee.company;   //delete operator isused to delete theobjects
// console.log(employee.company);

var emp1 = Object.create(employee);
delete emp1.company; //object got company as a prototype, delete opertor doesn't delete prototype property.
console.log(emp1.company);
console.log(emp1.hasOwnProperty("company"));
//-----------------------------------------------------------------
//what is use of bind function ?
//bind function is used when you have a particular function that call the specific this values. mainly to pass the specific object to function that uses a this rrference.

function sample(first, last) {
  return "hello this is " + this.first + " " + this.last;
}

var person = {
  first: "prathyusha",
  last: "kurigala",
};
console.log(sample.bind(person)());
//--------------------------------------------------------
console.log(0.1 + 0.2 === 0.3); //false result of 0.1+o.2 is equa to0.300000000004 so
//-------------------------------------------------------------
//create a private var
function priv() {
  let pra = "secret code";
  return function () {
    return console.log(pra); //undefined
  };
}

// console.log(priv());
let gerPriv = priv();
console.log(gerPriv());
//------------------------------------------------------------------
//coercion - implict and expliict

//expilict
var a = "42";
var b = Number(42);

console.log(a);
console.log(b);
//impilict
var a = "42";
var b = a * 1;
console.log(b);
//------------------------------------------------------------
let d = 4;
var e = 6;
function simple(num1, num) {
  var d = 3;
  var e = 8;
  console.log(d);
  console.log(e);
  return num1 * num;
}
console.log(d);
console.log(e);
console.log(simple(5, 4));
