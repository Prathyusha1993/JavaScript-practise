const myObject = {
    name :'pjf',
    age : 32,
    num : 9876543
};
console.log(myObject);
console.log(JSON.stringify(myObject));  //res : {"name" : 'pjf', "age":32, "num": 98763324}
console.log(JSON.parse(JSON.stringify(myObject)));   //res : Object { name: 'pjf', age:32, num:987654}