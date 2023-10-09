class QueueArray {
    constructor(size) {
        this.storage = new Array(size);
        this.maxSize = size;
        this.start = 0;
        this.end = 0;
    }

    enqueue(value) {
        this.storage[this.end] = value;
        this.end++
        if (this.end === this.maxSize - 1) {
            if (this.start !== 0) {
                this.normalizeIndices()
            } else {
                this.resize(this.maxSize * 2)
            }
        }
    }

    dequeue() {
        this.storage[this.start] = undefined;
        this.start++
        const quarterSize = Math.round(this.maxSize / 4)
        if (this.end - this.start <= quarterSize) {
            if (this.start !== 0) {
                this.normalizeIndices();
            }
            const halfSize = Math.round(this.maxSize / 2)
            this.shrink(halfSize)
        }
    }

    shrink(size) {
        this.resize(size)
    }

    normalizeIndices() {
        let cur = 0;
        const newStorage = new Array(this.maxSize);
        for (let i = 0; i <= this.end; i++) {
            if (i === this.start) {
                this.start = cur;
            }
            if (i === this.end) {
                this.end = cur;
            }
            if (this.storage[i] !== undefined) {
                newStorage[cur] = this.storage[i];
                cur++
            }
        }
        this.storage = newStorage;
    }

    resize(size) {
        const newStorage = new Array(size);
        for (let i = 0; i <= this.end; i++) {
            newStorage[i] = this.storage[i];
        }
        this.maxSize = size
        this.storage = newStorage;
    }
}

const queue = new QueueArray(2);
console.log({ stor: queue.storage })
queue.enqueue(4)
queue.enqueue(3)
console.log({ stor: queue.storage })
queue.enqueue(2)
queue.enqueue(1)
console.log({ stor: queue.storage })
queue.dequeue()
queue.dequeue()
queue.dequeue()
// queue.dequeue()
console.log({ stor: queue.storage })
queue.enqueue(5)
console.log({ stor: queue.storage })

