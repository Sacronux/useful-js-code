class NodeElement {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.head = null;
        this.count = 0;
        this.last = null;
        this.capacity = capacity;
    }

    get(key) {
        const cached = this.cache[key];

        if (!cached) {
            return -1;
        }

        if (this.last === cached) {
            return cached.value.value;
        }
        if (this.head === cached) {
            const saved = this.head;
            this.head = this.head.next
            this.head.prev = null;
            this.last.next = saved;
            saved.prev = this.last;
            saved.next = null;
            this.last = saved;
            return cached.value.value;
        }
        const saved = cached;
        const prev = cached.prev;
        const next = cached.next;

        prev.next = next;
        next.prev = prev;

        this.last.next = saved;
        saved.prev = this.last;
        this.last = saved;
        return cached.value.value;
    }

    put(key, value) {
        const cached = this.cache[key];
        if (!cached) {
            const isExceeded = this.count + 1 > this.capacity;
            if (!isExceeded) {
                this.count += 1;
            }

            if (this.last) {
                const element = new NodeElement({key, value}, this.last)
                this.last.next = element;
                this.last = element;
                this.cache[key] = element;
                if (isExceeded) {
                    const headKey = this.head.value.key;
                    delete this.cache[headKey];
                    this.head = this.head.next;
                    this.head.prev = null;
                }
            } else {
                this.head = new NodeElement({key, value});
                this.cache[key] = this.head
                this.last = this.head
            }
        } else {
            if (this.last === cached) {
                this.last.value.value = value;
                return;
            }
            if (this.head === cached) {
                const saved = this.head;
                saved.value.value = value;
                this.head = this.head.next
                this.head.prev = null;
                this.last.next = saved;
                saved.prev = this.last;
                saved.next = null;
                this.last = saved;
                return;
            }
            const saved = cached;
            saved.value.value = value;
            const prev = cached.prev;
            const next = cached.next;

            prev.next = next;
            next.prev = prev;

            this.last.next = saved;
            saved.prev = this.last;
            this.last = saved;
        }
    }
}