class PercolationBruteForce {
  constructor(n) {
    this.n = n;
    const objectStructure = {};
    this.data = {};
    for (let i = 0; i < n; i++) {
      objectStructure[i] = 0;
    }
    for (let i = 0; i < n; i++) {
      this.data[i] = structuredClone(objectStructure);
    }
  }

  isOpen(row, col) {
    return this.data[obj][col]
  }

  open(row, col) {
    this.data[obj][col] = 1;
  }


}

class Percolation {
  constructor(n) {
    this.data = [];
    this.n = n;
    this.topIdx = n * n;
    this.bottomIdx = n * n + 1;

    for (let i = 0; i < n * n; i++) {
      this.data[i] = -1;
    }

    this.data[this.topIdx] = this.topIdx
    this.data[this.bottomIdx] = this.bottomIdx

  }

  _getIdx(row, col) {
    console.log({ row, col })
    const idx = row * this.n + col;
    return idx;
  } 

  isOpen(row, col) {
    const idx = this._getIdx(row, col);
    return this.data[idx] !== -1
  }

  connected(p, q) {
    return this.root(p) === this.root(q)
  }

  percolates() {
    return this.connected(this.topIdx, this.bottomIdx)
  }

  root(p) {
    let i = p;

    while (i !== this.data[i]) {
      i = this.data[this.data[i]]
    }

    return i;
  }

  union(p, q) {
    if (this.data[p] === -1 || this.data[q] === -1) {
      return;
    }

    const pRoot = this.root(p)
    const qRoot = this.root(q)

    if (this.connected(pRoot, qRoot)) {
      return;
    }

    this.data[pRoot] = qRoot;
    let i = p;
    while (this.data[i] !== qRoot) {
      const next = this.data[i]
      this.data[i] = qRoot
      i = next
    }
    let j = q;
    while (this.data[j] !== qRoot) {
      const next = this.data[j]
      this.data[j] = qRoot
      i = next
    }

  }

  open(row, col) {
    const idx = this._getIdx(row, col);
    console.log({ idx })

    if (this.data[idx] !== -1) {
      return;
    }
    this.data[idx] = idx

    if (row === 0) {
      this.union(idx, this.topIdx)
      const bottomIdx = idx + this.n;
      this.union(bottomIdx, idx)
    } else if (row === this.n - 1) {
      console.log({ lastRow: true, idx })
      const topIdx = idx - this.n

      this.union(idx, topIdx)
      this.union(this.bottomIdx, idx)

    } else {
      const topIdx = idx - this.n;
      const bottomIdx = idx + this.n;

      this.union(idx, topIdx)
      this.union(bottomIdx, idx)
    }

    const rightIdx = (idx + 1) % this.n === 0 ? null : idx + 1;
    const leftIdx = idx % this.n === 0 ? null : idx - 1;

    if (rightIdx !== null) {
      this.union(idx, rightIdx)
    }

    if (leftIdx !== null) {
      this.union(idx, leftIdx)
    } 
  }

  visualize() {
    const res = {};
    let row = 0;
    for (let i = 0; i < this.data.length - 2; i++) {
      if (!res[row]) {
        res[row] = [this.data[i]]
        continue;
      }

      res[row].push(this.data[i])

      if (((i + 1) % this.n) === 0) {
        console.log({ i, n: this.n })
        row += 1;
      }
    }
    res.top = this.data[this.topIdx]
    res.bottom = this.data[this.bottomIdx]
    return res;
  }
}

const pr = new Percolation(5);

pr.open(2, 2)
pr.open(4, 3)
pr.open(4, 4)
pr.open(2, 3)
pr.open(3, 4)
pr.open(2, 4)
pr.open(1, 2)
pr.open(0, 2)

console.log({ data: pr.data, percolates: pr.percolates(), v: pr.visualize() })