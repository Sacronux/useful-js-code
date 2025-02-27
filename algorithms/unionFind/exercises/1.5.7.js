class QuickUnionUF {
  constructor(n) {
    this.data = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  root(p) {
    let i = p
    while (this.data[i] !== i) {
      i = this.data[this.data[i]]
    }
    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q)
  }

  union(p, q) {
    const pRoot = this.root(p)
    const qRoot = this.root(q)

    this.data[pRoot] = qRoot;
  }
}

class QuickFindUF {
  constructor(n) {
    this.data = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  connected(p, q) {
    return this.data[p] === this.data[q]
  }

  union(p, q) {
    const base = this.data[p];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === this.data[q]) {
        this.data[i] = base;
      }
    }
  }
}