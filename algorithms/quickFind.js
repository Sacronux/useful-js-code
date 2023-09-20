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

console.log(isConnected(2, 5))
union(5, 2)
console.log(isConnected(2, 5))
