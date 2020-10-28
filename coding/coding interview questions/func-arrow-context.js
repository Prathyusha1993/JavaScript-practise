class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    this.getProfile = function() {
        console.log(this.constructor.name);
        return () => {
            console.log(this.constructor.name);   //user
            console.log("I'm " + this.name + " , " + this.age + " yr old");
        }
    }
}
}
let user = new User('Prathyusha', 26);
let profile = user.getProfile();
profile();