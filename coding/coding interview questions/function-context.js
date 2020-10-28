function User(name, age){
        this.name = name;
        this.age = age;
    
        this.getProfile = function (){
            console.log(this.constructor.name);
            return function(){
                console.log(this.constructor.name);  //window
                console.log("I'm " + this.name + " , " + this.age + " yr old");
            }
        }
}

let user = new User('John', 34);
let profile = user.getProfile();
profile();   //undefined