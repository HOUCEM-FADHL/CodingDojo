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

    //  return a string containing all list values.
    Display(){
        let node = this.head;
        let str = "";
        while(node) {
            str += node.data + ", ";
            node = node.next;
        }
        console.log(str.slice(0, -2));
    }
}

let sll = new SLL();
console.log(sll);
sll.addFront(76);
console.log(sll);
sll.addFront(2);
console.log(sll);
sll.Display();
sll.addFront(11.41);
sll.Display();
