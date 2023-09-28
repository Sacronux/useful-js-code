class QuickUnion {
    constructor (size) {
        this.ids = new Array(size);
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
        this.size = new Array(size).fill(1)
    }

    root(p) {
        while(p !== this.ids[p]) {
            validate(p)
            p = this.ids[p]
        }
        return p
    }

    rootPassCompression(p) {
        let root = p
        while (this.ids[root] !== root) {
            root = this.ids[root]
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

    findBiggestElementConnected(p) {
        let biggest = p;
        for (let i = 0; i < this.ids.length; i++) {
            if (this.isConnected(p, i)) {
                if (i > biggest) {
                    biggest = i
                }
            }
        }
        return biggest
    }

    findSmallestSuccessor(x) {
        this.unionWeighted(x, x + 1)
        return x + 1
    }

    union(p, q) {
        const pRoot = this.root(p)
        const qRoot = this.root(q)

        this.ids[pRoot] = qRoot;
    }

    unionWeighted(p, q) {
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

const uf = new QuickUnion(10)
uf.union(2, 3)
uf.union(3, 4)
uf.union(5, 4)
uf.union(8, 3)
console.log(uf.ids)
console.log(uf.findBiggestElementConnected(2))




