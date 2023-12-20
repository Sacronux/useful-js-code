export class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class StackWithMax {
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

    max() {
        let max = this.first.value;
        let cur = this.first.next;
        while (cur !== null) {
            if (cur.value > max) {
                max = cur.value
            }
            cur = cur.next;
        }
        return max;
    }
}

const stack = new StackWithMax();
stack.isEmpty();
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
stack.push(7)
stack.push(7)
stack.pop()
console.log(stack.max())
console.log(JSON.stringify(stack.first, null, 2))
