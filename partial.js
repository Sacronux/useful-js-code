const partial = (fn, ...args) => (...rest) => fn(args.concat(rest))

const sum = (...args) => args.reduce((acc, cur) => (acc += cur), 0)

const partialSum = partial(sum, 1, 2, 3)

const p1 = partial(partialSum, 1)

console.log(sum())