class MaxHeap {
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
            let maxChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
                maxChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] >= this.heap[this.maxChildIndex]) {
                break;
            }

            if (this.heap[index] < this.heap[maxChildIndex]) {
                this.swap(index, maxChildIndex)
            }

            index = maxChildIndex;
        }
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while(this.getParent(index) < this.heap[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(this.getParentIndex(index), index)
            index = parentIndex;
        }
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(2)
maxHeap.insert(1)
maxHeap.insert(18)
maxHeap.insert(14)
maxHeap.insert(9)
maxHeap.insert(32)
maxHeap.insert(3)
maxHeap.insert(100)
maxHeap.insert(4)
maxHeap.insert(4)
console.log(maxHeap.heap)

maxHeap.remove()


console.log(maxHeap.heap)






