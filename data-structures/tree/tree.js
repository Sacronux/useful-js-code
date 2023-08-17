class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    insert (value) {
        if (value <= this.data) {
            if (this.left === null) {
                this.left = new Node(value);
                return;
            }
            return this.left.insert(value)
        }
        if (this.right === null) {
            this.right = new Node(value);
            return;
        }
        return this.right.insert(value)
    }

    printInOrder() {
        if (this.left !== null) {
            this.left.printInOrder()
        }
        console.log(this.data)
        if (this.right !== null) {
            this.right.printInOrder()
        }
    }

    printPreOrder() {
        console.log(this.data)
        if (this.left !== null) {
            this.left.printInOrder()
        }
        if (this.right !== null) {
            this.right.printInOrder()
        }
    }

    printPostOrder() {
        if (this.left !== null) {
            this.left.printInOrder()
        }
        if (this.right !== null) {
            this.right.printInOrder()
        }
        console.log(this.data)

    }
}

const tree = new Node(1);
tree.insert(2)
tree.insert(5)
tree.insert(4)

tree.printInOrder()
tree.printPreOrder()
tree.printPostOrder()


