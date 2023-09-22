const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const root = (p) => {
    while(ids[p] !== p) {
        p = ids[p]
    }
    return p
}

const isConnected = (p, q) => {
    const pRoot = root(p)
    const qRoot = root(q)
    return pRoot === qRoot;
}

const union = (p, q) => {
    const pRoot = root(p)
    const qRoot = root(q)

    ids[pRoot] = qRoot; 
}

class QuickUnion {
    constructor (size) {
        this.ids = new Array(size);
        for (let i = 0; i < size; i++) {
            ids[i] = i;
        }
        this.size = new Array(size).fill(1)
    }

    root(p) {
        while(p !== this.ids[p]) {
            p = this.ids[p]
        }
        return p
    }

    rootPassCompression(p) {
        let root = p
        while (this.ids[root] !== root) {
            root = ids[root]
        }

        while(p !== root) {
            const next = this.ids[p];
            this.ids[p] = root;
            p = next
        }
        return root;
    }

    isConnected(p, q) {
        return this.root(p) === this.root(q)
    }

    union(p, q) {
        const pRoot = this.root(p)
        const qRoot = this.root(q)

        this.ids[pRoot] = qRoot;
    }

    unionWeighted() {
        const pRoot = this.root(p)
        const qRoot = this.root(q)

        if (this.size[pRoot] < this.size(qRoot)) {
            this.ids[pRoot] = qRoot;
            this.size[qRoot] += this.size[pRoot]
        } else {
            this.ids[qRoot] = pRoot;
            this.size[pRoot] += this.size[qRoot]
        }
    }
}

console.log(isConnected(0, 3))
union(0, 3)
union(1, 3)
union(2, 4)
union(4, 3)
console.log(isConnected(0, 3))
console.log(ids)