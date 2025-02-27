class QuickUnion {
  constructor(n) {
    this.data = [];

    for (let i = 0; i < n; i++) {
      this.data[i] = i
    }
  }

  root(p) {
    let i = p;

    while (this.data[i] !== i) {
      i = this.data[i]
    }

    return i
  }

  connected(p, q) {
    let pRoot = this.root(p);
    let qRoot = this.root(q);

    const res = pRoot === qRoot
    console.log
    console.log({ connected: res, pRoot, qRoot, p: this.data[pRoot], q: this.data[qRoot] })
    return res
  }

  union(p, q) {
    let pRoot = this.root(p);
    let qRoot = this.root(q);

    this.data[pRoot] = qRoot
  }  
}

class QuickWeightedUnion {
  constructor(n) {
    this.data = [];
    this.count = [];
    for (let i = 0; i < n; i++) {
      this.data[i] = i
      this.count[i] = 1;
      this.accessed = 0;
    }
  }

  root(p) {
    let i = p;
    let length = 1;

    while (this.data[i] !== i) {
      i = this.data[i]
      this.accessed++
    }
    console.log({ length })
    return { root: i, length };
  }

  connected(p, q) {
    const { root: pRoot } = this.root(p)
    const { root: qRoot } = this.root(q);

    const r = pRoot === qRoot;
    return r;
  }

  union(p, q) {
    const { root: pRoot, length: pLength } = this.root(p)
    const { root: qRoot, length: qLength } = this.root(q);

    if (pRoot === qRoot) {
      return;
    }
    this.accessed++

    if (this.count[pRoot] < this.count[qRoot]) {
      this.data[pRoot] = qRoot
      this.count[qRoot] += this.count[pRoot]
      return;
    }

    this.count[pRoot] += this.count[qRoot]
    this.data[qRoot] = pRoot
  }
}

class WeightedQuickUnionUF {
  constructor(N) {
    // Number of components.
    this._count = N;
    // Parent links: id[i] = parent of i.
    this.id = new Array(N);
    // Size of each component (only valid for roots).
    this.sz = new Array(N);
    
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }

  // Returns the number of components.
  count() {
    return this._count;
  }

  // Returns true if p and q are in the same component.
  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  // Returns the component identifier for p.
  // In other words, returns the root of p.
  find(p) {
    while (p !== this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  // Merges the component containing p with the component containing q.
  union(p, q) {
    const i = this.find(p);
    const j = this.find(q);
    if (i === j) return;

    // Make smaller root point to larger one.
    console.log({ szi: this.sz[i], szj: this.sz[j] })
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
    this._count--;
  }
}




// const qu1 = new WeightedQuickUnionUF(10)
const qu = new QuickWeightedUnion(10);

qu.union(9, 0)
qu.union(3, 4) 
qu.union(5, 8)
qu.union(7, 2)
qu.union(2, 1)
qu.union(5, 7)
qu.union(0, 3)
qu.union(4, 2)

console.log({ accessed: qu.accessed })


