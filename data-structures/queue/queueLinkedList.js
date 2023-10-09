// import { Node } from "../linkedList/linkedListSimple";
import { Node } from "../linkedList/linkedListSimple.js"

class QueueLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const oldLast = this.last;
        this.last = new Node(value);
        if (this.isEmpty()) {
            this.first = this.last;
            return;
        }
        oldLast.next = this.last;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const oldValue = this.first.value;
        this.first = this.first.next;
        if (this.isEmpty()) {
            this.last = this.first;
        }
        return oldValue
    }

    isEmpty() {
        return this.first === null;
    }
}

const lL = new QueueLinkedList();
lL.isEmpty();
lL.enqueue(4)
lL.enqueue(3)
lL.enqueue(2)
lL.enqueue(1)
lL.dequeue()
console.log(JSON.stringify({ f: lL.first, l: lL.last }, null, 2))