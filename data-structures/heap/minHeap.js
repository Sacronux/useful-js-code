class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    swap(firstIndex, secondIndex) {
        const temp = this.heap[firstIndex];
        this.heap[firstIndex] = this.heap[secondIndex];
        this.heap[secondIndex] = temp;
    }

    getParent(index) {
        const parentIndex = this.getParentIndex(index);
        return this.heap[parentIndex];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    remove() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    getLeftChild(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const leftChild = this.heap[leftChildIndex];
        if (leftChild === undefined) {
            return null;
        }

        return leftChild 
    }

    getRightChild(index) {
        const rightChildIndex = this.getRightChildIndex(index);
        const rightChild = this.heap[rightChildIndex];
        if (rightChild === undefined) {
            return null;
        }

        return rightChild 
    }

    hasLeftChild(index) {
        return this.getLeftChild(index) !== null;
    }

    hasRightChild(index) {
        return this.getRightChild(index) !== null;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let minChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                minChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] <= this.heap[this.minChildIndex]) {
                break;
            }

            if (this.heap[index] > this.heap[minChildIndex]) {
                this.swap(index, minChildIndex)
            }

            index = minChildIndex;
        }
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while(this.getParent(index) > this.heap[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(this.getParentIndex(index), index)
            index = parentIndex;
        }
    }
}

const minHeap = new MinHeap();

minHeap.insert(2)
minHeap.insert(1)
minHeap.insert(18)
minHeap.insert(14)
minHeap.insert(9)
minHeap.insert(32)
minHeap.insert(3)
minHeap.insert(100)
minHeap.insert(4)
minHeap.insert(4)
console.log(minHeap.heap)

minHeap.remove()


console.log(minHeap.heap)






