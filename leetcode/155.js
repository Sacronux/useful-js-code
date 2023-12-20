class MinStack {
    constructor() {
      this.storage = [];
      this.minimals = [];
    }
  
    push(val) {
      this.storage.push(val)
      if (val <= this.minimals[this.minimals.length - 1] || this.minimals.length === 0) {
        this.minimals.push(val)
      }
    }
  
    pop() {
      const popped = this.storage.pop();
      if (popped === this.minimals[this.minimals.length - 1]) {
        this.minimals.pop()
      }
    }
  
    top() {
      return this.storage[this.storage.length - 1]
    }
  
    getMin() {
      console.log(this.minimals)
      return this.minimals[this.minimals.length - 1]
    }
  }