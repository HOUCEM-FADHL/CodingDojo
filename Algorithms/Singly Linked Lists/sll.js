class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// * Singly Linked List
class SLL {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    initHead(data){
        var node = new Node(data);
        this.head = node;
        this.length++;
    }

    fromArrayToSLL(array){
        if (this.head == null){
            this.head = new Node(array[0]);
        }
        let current = this.head;
        for (let i = 1; i < array.length; i++){
            // let node = new Node(array[i]);
            // current.next = node;
            // current = current.next;
            this.insertAtEnd(array[i])
        }
    }


    insertAtBeginning(data){
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    insertAtEnd(data){
        var node = new Node(data);
        this.length++;
        if (this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    printList(){
        let current = this.head;
        while (current){
            console.log(`Data: ${current.data} ->`);
            current = current.next;
        }
        console.log("Null")
    }

    // * InsertAt
    // Will insert a node at certain index.
    insertAt(index , data){
        var node = new Node(data);
        if (index == 0){
            node.next = this.head;
            this.head = node;
        }else{
            let current = this.head;
            let previous = current;
            while (current && index !== 0){
                if (index == 1){
                    previous = current
                }
                index--;
                current = current.next;
            }
            if (index != 0){
                console.log("Index out of bounds.");
            }else{
                node.next = current;
                previous.next = node;
            }
        }
    }

    // * RemoveFrom
    // Will remove a node at a certain index.
    removeAt(index){
        if (index == 0){
            this.head = this.head.next;
        }else{
            let counter = 1;
            let current = this.head.next;
            let previous = this.head;
            while(current && (counter < index)){
                counter++;
                previous = current;
                current = current.next;
            }
            if (current == null){
                console.log("Index out of bounds!");
                return null;
            }

            if (current.next){
                previous.next = current.next;
            }else{
                previous.next = null;
            }
        }
    }

    // findMax
    // Returns the maximum value inside the list
    findMax(){
        let max = this.head.data;

        let current = this.head.next;
        while(current){
            if (current.data > max){
                max = current.data;
            }
            current = current.next;
        }
        return max;
    }

    // findMin
    // Returns the lowest value inside the list.
    findMin(){
        let min = this.head.data;

        let current = this.head.next;
        while(current){
            if(current.data < min){
                min = current.data;
            }
            current = current.next;
        }

        return min;
    }

    // getAverage
    // Return the average value in list.
    findAverage(){
        let sum = this.head.data;
        let counter = 1;

        let current = this.head.next;
        while (current){
            sum += current.data;
            current = current.next;
            counter++;
        }
        return sum / counter;
    }

    // toArray
    // Return an array containing the values store in this list.
    toArray(){
        let array = [];
        let current = this.head;
        while (current){
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}


let sll = new SLL();
let array = [55, 20,-20,30];
sll.fromArrayToSLL(array);
sll.printList();

console.log(`MAX: ${sll.findMax()}`);
console.log(`MIN: ${sll.findMin()}`);
console.log(`AVERAGE: ${sll.findAverage()}`);
console.log(`Array: ${sll.toArray()}`);

// sll.insertAt(0 , -40);
// sll.printList();
// [30 , 5]