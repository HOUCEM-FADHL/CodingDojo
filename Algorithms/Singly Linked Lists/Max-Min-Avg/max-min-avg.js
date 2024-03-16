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

    min(){
        if(!this.head) {
            return null;
        }
        let min = this.head.data;
        let node = this.head;
        while(node.next) {
            if(node.next.data < min) {
                min = node.next.data;
            }
            node = node.next;
        }
        return min;
    }

    max(){
        if(!this.head) {
            return null;
        }
        let max = this.head.data;
        let node = this.head;
        while(node.next) {
            if(node.next.data > max) {
                max = node.next.data;
            }
            node = node.next;
        }
        return max;
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

    average(){
        if(!this.head) {
            return null;
        }
        let sum = 0;
        let node = this.head;
        while(node) {
            sum += node.data;
            node = node.next;
        }
        return sum / this.Length();
    }
}

let sll = new SLL();
console.log(sll);
sll.addFront(76);
console.log(sll);
sll.addFront(1);
console.log(sll);
sll.addFront(82);
console.log(sll);
console.log("Min:", sll.min());
console.log("Max:", sll.max());
console.log("Avg:", sll.average());