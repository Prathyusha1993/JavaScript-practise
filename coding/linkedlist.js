//insert operation on singly linked list

class Node {
    constructor(data, next=null){
        this.data = data,
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

let list = new LinkedList();

//inser a new node before gthe head of singly linkedlist 
LinkedList.prototype.inserAtBeginning = function(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head=newNode;
    return this.head;
}

//insert a node at end of singly linkedlist 
LinkedList.prototype.insertAtEnd = function(data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return this.head;
    }else{
        let tail = this.head;
        while(tail.next !== null){
            tail=tail.next;
        }
        tail.next=newNode;
        return this.head;
    }
}