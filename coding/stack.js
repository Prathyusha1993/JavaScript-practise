// /Implement enqueue and dequeue using only two stacks
var stack1 = [];
var stack2 = [];

function enqueue(stack1, element){
    console.log(stack1.push(element));
}

function dequeue(stack1, stack2){
    if(stack2.length === 0){
        if(stack1.length === 0){
            console.log("cannot perform dequeue operaation");
        }
        while(stack1.length > 0){
            var p = stack1.pop();
            stack2.push(p);
        }
    }
    return stack2.pop();
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
dequeue();

//------------------------------------------------------------------
