//arrays are not in sorted order, please sort them iin such way that -ve chars onleft and +ve on right
//input : [4,-3, 2,-5,5,-1,3]
//output : [-3,-5,-1,4,2,5,3]
let array = [4,-3, 2,-5,5,-1,3];
array.sort();
console.log(array);

let numbers = [0,1,2,3,10,20,30];
console.log(numbers.sort());

numbers.sort((a,b) => {
    if(a>b) return 1
    if(a < b) return -1;
    return 0;
})
console.log(numbers);

//sorting array of strings:
const strings = ['cat', 'rat', 'fox', 'dog', 'ant', 'bee'];
console.log(strings.sort());
//descending order
strings.sort((a,b) => {
    if(a > b)return -1;
    if(a < b) return 1;
    return 0;
})
console.log(strings);

//mixedCaseAnimals : 
const string = ['Fox', 'rat', 'Elephant', 'bee', 'Cat'];
string.sort((a,b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;
})
console.log(string);

let scores = [80, 90, 70, 9, 20, 10, 5];
scores.sort();
console.log(scores);

scores.sort((a,b) => {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
})
console.log(scores);

//sorting with objects:
let employees = [{name: 'John', salary: 90000, hireData: 'July 1, 2010'},
                {name: 'Edward', salary: 70000, hireData: 'June 12, 2011'},
                {name: 'Mask', salary: 50000, hireData: 'August 31, 2014'},
                {name: 'Govind', salary: 100000, hireData: 'September 18, 2009'},];
employees.sort((a,b) => {
    return a.salary - b.salary;
})
console.log(employees);

employees.sort((x,y) => {
    let a = x.name.toLowerCase();
    let b = y.name.toLowerCase();
    return a == b ? 0 : a > b ? 1 : -1
})
console.log(employees);

let baz = ['My cat ate my homework', 37, 9,5,17];
const sortedBaz = [...baz].sort();
console.log(sortedBaz);

