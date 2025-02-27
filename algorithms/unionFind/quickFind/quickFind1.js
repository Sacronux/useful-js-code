class QuickFind {
  constructor(n) {
    this.data = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
    console.log(this.data)
    this.accessed = 0;
  }

  connected(p, q) {
    const result = this.data[p] === this.data[q]
    this.accessed += 2;
    console.log({ connected: result })
    return result
  }

  union(p, q) {
    const base = this.data[p]

    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === base) {
        this.data[i] = this.data[q]
        count++
        this.accessed+=2

      }
      this.accessed++
    }
    return count
  }


}

const qf = new QuickFind(10)
qf.union(9, 0)
qf.union(3, 4) 
qf.union(5, 8)
qf.union(7, 2)
qf.union(2, 1)
qf.union(5, 7)
qf.union(0, 3)
qf.union(4, 2)
console.log({ accessed: qf.accessed })