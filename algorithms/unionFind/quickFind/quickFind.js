const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const isConnected = (p, q) => {
    if (ids[p] === ids[q]) {
        return true
    }
    return false
}

const union = (p, q) => {
    const pValue = ids[p]
    const qValue = ids[q]
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] === pValue) {
            ids[i] = qValue
        }
    }
}

class Percolation {
    constructor (n) {
        this.grid = new Array(n * n).fill(-1);
        this.n = n;
        this.numberOfOpen = 0;
    }

    getIdx(row, col) {
        const idx = row * 10 + col;
        if (this.grid[idx] === undefined) {
            throw new Error('Field is outside of the grid');
        }
        return idx;
    }

    neighbors(idx) {
        const neighbors = [];
        const value = this.grid[idx];

        const topNeighbor = idx - 10;
        if (this.grid[topNeighbor] !== undefined && this.grid[topNeighbor] !== -1) {
            neighbors.push(topNeighbor);
        }

        const bottomNeighbor = idx + 10;
        if (this.grid[bottomNeighbor] !== undefined && this.grid[bottomNeighbor] !== -1) {
            neighbors.push(bottomNeighbor);
        }

        const rightNeighbor = idx + 1;
        if (rightNeighbor % 10 !== 0 && this.grid[rightNeighbor] !== -1) {
            neighbors.push(rightNeighbor);
        }

        const leftNeighbor = idx - 1;
        if (leftNeighbor % 10 !== 9 && this.grid[leftNeighbor] !== -1) {
            neighbors.push(leftNeighbor);
        }

        return neighbors;
    }

    open(row, col) {
        const idx = this.getIdx(row, col);

        if (this.grid[idx] !== undefined) {
            if (this.grid[idx] === -1) {
                this.numberOfOpen += 1;
            }
            this.grid[idx] = idx;

            const neighbors = this.neighbors(idx);
            const neighborsValues = neighbors.map((idx) => this.grid[idx]);
            this.grid.map((site, i) => {
                if (neighborsValues.includes(site)) {
                    this.grid[i] = this.grid[idx]
                }
            })
            console.log(this.grid)
            return true
        }
        return false;
    }

    percolates() {
        for (let i = this.grid.length - this.n; i < this.grid.length; i++) {
            const value = this.grid[i];
            if (value === -1) {
                continue;
            }
            for (let j = 0; j < this.n; j++) {
                if (this.grid[j] === value) {
                    return true
                }
            }
        }
        return false;
    }

    print() {
        let string = '';

        this.grid.forEach((val, i) => {
            string += val === -1 ? `${val}` : ` ${val}`
            if (i % 10 === 9) {
                string += '\n'
            }

        })

        return string
    }

    isOpen(row, col) {
        const idx = this.getIdx(row, col);

        return this.grid[idx] === -1;
    }

    isFull(row, col) {
        const idx = this.getIdx(row, col);

        return this.grid[idx] !== -1;
    }
}

const p = new Percolation(10)
p.open(0, 4)
p.open(0, 5)
p.open(1, 6)
p.open(2, 6)
p.open(3, 6)
p.open(4, 6)
p.open(5, 6)
p.open(6, 6)
p.open(7, 6)
p.open(8, 6)
p.open(9, 6)
p.open(0, 7)
p.open(0, 6)
console.log(p.print())
console.log(p.percolates())





// console.log(isConnected(2, 5))
// union(5, 2)
// console.log(isConnected(2, 5))
