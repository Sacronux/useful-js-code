class Exercise1514 {
  constructor(n) {
    this.data = [];
    this.count = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i
      this.count[i] = 1;
    }
  }

  root(p) {
    let i = p;
    let length = 1;

    while (this.data[i] !== i) {
      i = this.data[i]
    }
    return { root: i, length };
  }

  connected(p, q) {
    const { root: pRoot } = this.root(p)
    const { root: qRoot } = this.root(q);

    const r = pRoot === qRoot;
    return r;
  }

  union(p, q) {
    const { root: pRoot } = this.root(p)
    const { root: qRoot } = this.root(q);

    if (pRoot === qRoot) {
      return;
    }

    if (this.count[pRoot] < this.count[qRoot]) {
      this.data[pRoot] = qRoot
      return;
    }
    
    this.data[qRoot] = pRoot
    if (this.count[pRoot] === this.count[qRoot]) {
      this.count[qRoot] += 1;
    }
  }
}