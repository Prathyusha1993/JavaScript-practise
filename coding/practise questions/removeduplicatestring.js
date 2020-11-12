var str = "int32,int32,int32,int32,int32,int32,int33,int32,int33";
var arr = str.split(",");
str = arr.filter((index, value, self) => {
    return self.indexOf(value) === index;
}).join(",");
console.log(str);
//----------------------------------------------------------------------------------------------
// string.prototype.removeDuplicate = Function() {
//     const set = new Set(this.split(','))
//     return [...set].join(',')
// }
// console.log(x.removeDuplicate());
//------------------------------------------------------------------------------------
//remove duplicate in array
let char = ['a', 'b', 'c', 'a', 'd','b'];
let unique = [...new Set(char)];
console.log(unique);

let uniqueChar = char.filter((c, index) => {
    return char.indexOf(c) === index;
})
console.log(uniqueChar);

let uniq = [];
char.forEach((c) => {
    if(!uniq.includes(c))
    uniq.push(c);
})
console.log(uniq);