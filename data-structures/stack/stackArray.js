class StackArray {
    constructor(size) {
        this.storage = new Array(size);
        this.n = 0
        this.maxSize = size;
    }

    push(value) {
        this.storage[this.n] = value;
        this.n++;
        if (this.n === this.maxSize) {
            this.resize(this.maxSize * 2)
        }
    }

    resize(size) {
        const copy = new Array(size);
        for (let i = 0; i < this.n; i++) {
            copy[i] = this.storage[i];
        }
        this.maxSize = size;
        this.storage = copy;
    }

    shrink(size) {
        this.resize(size)
    }

    pop() {
        this.n--
        if (this.n === Math.round(this.maxSize / 4)) {
            this.shrink(Math.round(this.maxSize / 2))
        }
        return this.storage[this.n]
    }
    isEmpty() {
        return this.n === 0
    }
    last() {
        return this.storage[this.n - 1]
    }
}

const stack = new StackArray(2);
console.log({ stor: stack.storage })
stack.push(4)
stack.push(3)
console.log({ stor: stack.storage })
stack.push(2)
stack.push(1)
console.log({ stor: stack.storage })
stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log({ stor: stack.storage })

