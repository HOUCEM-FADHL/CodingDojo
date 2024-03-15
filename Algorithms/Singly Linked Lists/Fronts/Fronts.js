class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value){
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this;
        }
        node.next = this.head;
        this.head = node;
        return this;
    }

    removeFront(){
        if(!this.head) {
            return null;
        }
        let node = this.head;
        this.head = this.head.next;
        return node;
    }

    front(){
        if(!this.head) {
            return null;
        }
        return this.head.data;
    }
}

let sll = new SLL();
console.log(sll);
sll.addFront(18);
console.log(sll);
sll.addFront(5);
console.log(sll);
sll.addFront(73);
console.log(sll);
sll.removeFront();
console.log(sll);
sll.removeFront();
console.log(sll);
console.log(sll.front());
sll.removeFront();
console.log(sll);
console.log(sll.front());