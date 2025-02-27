class Exercise1512 {
  constructor(n) {
    this.data = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  root(p) {
    let i = p;
    while (this.data[i] !== i) {
      i = this.data[this.data[i]]
    }

    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q)
  }

  pathCompression(start, root) {
    let i = start;

    while (this.data[i] !== i) {
      const parent = this.data[i]
      this.data[i] = root;
      i = parent;
    }
  }

  union(p, q) {
    const pRoot = this.root(p);
    const qRoot = this.root(q);

    this.data[pRoot] = qRoot;

    if (pRoot === qRoot) {
      return;
    }

    this.pathCompression(p, qRoot)
    this.pathCompression(q, qRoot)
  }
}