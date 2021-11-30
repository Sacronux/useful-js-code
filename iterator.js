const makeIterator = arr => {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < arr.length ? {
        done: false,
        value: arr[nextIndex++]
      } : {
        done: true
      }
    }
  }
}

const range = {
  from: 1,
  to: 5,
  displayLog: () => {
    console.log(this)
  }
}

range.displayLog()

range[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        return {
          value: current++,
        }
      } else {
        return {
          value: current,
          done: true
        }
      }
    }
  }
}

for (const el of range) {
  console.log(el)
}
