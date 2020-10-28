function main(){
    console.log('this executes first : A');
    setTimeout(function prints(){console.log('this executes third : B')}, 0);
    setInterval(() => {
        console.log('this executes at end in the continues iinterval');
    }, 0);
    console.log('this executes second : C')
}
console.log(main());