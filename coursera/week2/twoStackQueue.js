import { LinkedList } from "../../data-structures/linkedList/linkedListSimple.js";

class TwoStackQueue {
    constructor() {
        this.stack1 = new LinkedList()
        this.stack2 = new LinkedList()
        this.size = 0;
    }

    dequeue(){
        while(!this.stack1.isEmpty()) {
            const v = this.stack1.pop();
            this.stack2.push(v);
        }
        this.stack2.pop()
        while(!this.stack2.isEmpty()) {
            const v = this.stack2.pop();
            this.stack1.push(v);
        }
    }

    enqueue(value) {
        this.stack1.push(value);
    }
}

const q = new TwoStackQueue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue()
console.log(JSON.stringify(q.stack1.first, null, 2))
