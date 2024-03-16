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

    // Method to add a new value to the BST
    add(val) {
        const newNode = new BTNode(val);
        if (!this.root) { // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (val < current.val) { // Traverse left if the value is smaller than current node
                if (!current.left) { // If left is null, insert the new node here
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (val > current.val) { // Traverse right if the value is greater than current node
                if (!current.right) { // If right is null, insert the new node here
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                // Handle duplicates (optional)
                return;
            }
        }
    }

    // Method to check if a value exists in the BST
    contains(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) { // If value matches current node, return true
                return true;
            } else if (val < current.val) { // Traverse left if value is smaller
                current = current.left;
            } else { // Traverse right if value is greater
                current = current.right;
            }
        }
        return false; // Value not found in the tree
    }

    // Method to find the minimum value in the BST
    min() {
        if (!this.root) return null; // If tree is empty, return null
        let current = this.root;
        while (current.left) { // Traverse left until left is null
            current = current.left;
        }
        return current.val; // Return the minimum value
    }

    // Method to find the maximum value in the BST
    max() {
        if (!this.root) return null; // If tree is empty, return null
        let current = this.root;
        while (current.right) { // Traverse right until right is null
            current = current.right;
        }
        return current.val; // Return the maximum value
    }

    // Method to find the size (number of nodes) of the BST
    size() {
        let count = 0;
        const stack = [];
        let current = this.root;
        while (current || stack.length > 0) {
            while (current) { // Traverse left until current is null
                stack.push(current);
                current = current.left;
            }
            current = stack.pop(); // Pop the node from stack
            count++; // Increment count for each node visited
            current = current.right; // Traverse right
        }
        return count;
    }

    // Method to check if the BST is empty
    isEmpty() {
        return !this.root; // If root is null, tree is empty
    }
}

// Example usage:
const tree = new BST();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(20);

console.log(tree.contains(7)); // Output: true
console.log(tree.min()); // Output: 3
console.log(tree.max()); // Output: 20
console.log(tree.size()); // Output: 7
console.log(tree.isEmpty()); // Output: false
