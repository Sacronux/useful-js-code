class StackArray {
    constructor() {
        this.storage = [];
        this.n = 0
    }

    push(value) {
        this.storage[this.n] = value 
        this.n++
    }

    pop() {
        this.n--
        return this.storage[this.n]
    }
    isEmpty() {
        return this.n === 0
    }
    last() {
        return this.storage[this.n - 1]
    }
}

const stack = new StackArray();
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
console.log(stack.storage, stack.n, stack.last())
