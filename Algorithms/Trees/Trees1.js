class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        const newNode = new BTNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                return;
            }
        }
    }

    contains(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return true;
            } else if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    min() {
        if (!this.root) return null;
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.val;
    }

    max() {
        if (!this.root) return null;
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.val;
    }

    size() {
        let count = 0;
        const stack = [];
        let current = this.root;
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            count++;
            current = current.right;
        }
        return count;
    }

    isEmpty() {
        return !this.root;
    }
}

const tree = new BST();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(20);

console.log(tree.contains(12));
console.log(tree.min());
console.log(tree.max());
console.log(tree.size());
console.log(tree.isEmpty()); 
