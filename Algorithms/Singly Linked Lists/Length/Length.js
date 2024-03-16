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


    Length(){
        let current = this.head;
        let count = 0;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
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
console.log(sll.Length())
