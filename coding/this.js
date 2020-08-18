function person(name, age) {
  this.name = name;
  this.age = age;
}

const per = new person("edward", 25);
console.log(per);
//------------------------------------------------------------------------
var bar = "global";

let obj = {
  bar: "obj",
  foo: foo,
};

let obj1 = {
  bar: "obj1",
};

function foo() {
  console.log(this.bar);
}

foo();
obj.foo();
foo.call(obj1);
new foo();
