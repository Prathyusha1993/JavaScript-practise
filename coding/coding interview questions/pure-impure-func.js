let numArr = [];
//impure
const impureAddnum = num => numArr.push(num);
//pure
const pureAddNum = num => argNumArr => argNumArr.concat([num]);

console.log(impureAddnum(4));
console.log(numArr);
console.log(pureAddNum(3) (numArr));
console.log(numArr);

//pure func is impure itself by altering the array and returning an push num index which id independent of parameter value