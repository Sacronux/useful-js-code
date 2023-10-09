export class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    constructor () {
        this.first = null;
    }

    push(value) {
        const old = this.first;
        this.first = new Node(value, old);
    }

    pop() {
        const oldValue = this.first.value;
        this.first = this.first.next;
        return oldValue;
    }
    isEmpty() {
        return this.first === null;
    }
}

const lL = new LinkedList();
lL.isEmpty();
lL.push(4)
lL.push(3)
lL.push(2)
lL.push(1)
lL.pop()
// console.log(JSON.stringify(lL.first, null, 2))
