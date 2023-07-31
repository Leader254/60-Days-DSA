// Pushing in a singly linked lists
// piece of data = val
// reference to the next node = next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("Hello");
list.push("Samuel")
console.log(list)


// Pop method - remove from the end of the linked list