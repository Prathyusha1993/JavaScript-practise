const str = "The quick brown fox";
let vowel_list = 'aeiouAEIOU';
let v_count = 0;
for(var x=0; x<str.length;x++){
    if(vowel_list.indexOf(str[x]) !== -1){
        v_count += 1;
    }
}
console.log(v_count);
//------------------------------