class Exercise1511 {
  constructor(n) {
    this.data = [];
    this.sizes = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
      this.sizes = 1;
    }
  }

  root(p) {
    let i = p;

    while (this.data[i] !== i) {
      i = this.data[this.data[i]]
    }

    return i
  }

  connected(p, q) {
    this.root(p) === this.root(q)
  }

  union(p, q) {
    const pRoot = this.root(p)
    const qRoot = this.root(q)

    if (this.sizes[pRoot] < this.sizes[qRoot]) {
      for (let i = 0; i < this.data.length; i++) {
        const root = this.root(i)
        if (root === pRoot) {
          this.data[i] = qRoot
        }
      }
      this.sizes[qRoot] += this.sizes[pRoot]
    } else {
      for (let i = 0; i < this.data.length; i++) {
        const root = this.root(i)
        if (root === qRoot) {
          this.data[i] = pRoot
        }
      }
      this.sizes[pRoot] += this.sizes[qRoot]
    }


  }
}