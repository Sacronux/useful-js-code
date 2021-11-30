const curry = fn => (...args) => {
  if (args.length < fn.length) {
    return curry(fn).bind(null, ...args) 
  } else {
    return fn(...args)
  }
}

const sum = (a, b, c, d) => a + b + c + d

const curried = curry(sum)

console.log(curried(1)(2, 3)(4))