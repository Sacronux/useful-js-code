class StackArrayNative {
    constructor () {
        this.storage = [];
    }
    push(value) {
        this.storage.push(value)
    }
    pop() {
        return this.storage.pop()
    }
    isEmpty() {
        return this.storage.length === 0
    }
}