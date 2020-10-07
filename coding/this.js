function person(name, age) {
  this.name = name;
  this.age = age;
}

const per = new person("edward", 25);
console.log(per);
//------------------------------------------------------------------------
function employee(email, contact){
  this.email = email;
  this.contact = contact;
}

const emp = new employee("khdbd@gmail.com", 987659876);
const emp1 = new employee("srgb@gmail.com", 935662276);

console.log(emp);
console.log(emp1);
//------------------------------------------------------------------------------
var person = {
  firstName : "prathyusha",
  lastName : "kurigala",
  id : 2434,
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
console.log(person.id);
