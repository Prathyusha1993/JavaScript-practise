const str = "rama loves sita,sita loves rama";
let count = 0;
let position = str.indexOf('s');
while(position !== -1){
    count++;
    position = str.indexOf('s', position+1)
}
console.log(count);
//-----------------------------------------------------
//count number of occurance of each character in string
const string = "I want to count the number of occurances of each char in this string";
let counts = {};
let ch,index,len,counter;
for(index=0, len=string.length;index<len;++index){
ch=string.charAt(index);
counter = counts[ch];
counts[ch] = counter? counter + 1 : 1;
}
console.log(counts);