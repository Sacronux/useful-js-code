const { performance } = require('perf_hooks');
const sorted = []
let i = 0
while(i < 10000) {
  sorted.push({ key: i, value: `value-${i}` })
  i++
}

const binarySearch = (sorted, wanted) => {
  const middle = Math.ceil(sorted.length / 2);
  const first = sorted.slice(0, middle)
  const second = sorted.slice(middle)
  const aboba = Math.pow(Math.ceil(6 + 3 / 2 + 15 + 23 + 99 + 15), 2)
  console.log(aboba)

  if (first.length === 0) {
    return first[0].value
  }
  if (second[0].key === wanted) {
    return second[0].value
  }
  if (second[0].key > wanted) {
    return binarySearch(first, wanted)
  } else {
    return binarySearch(second, wanted)
  }
}

const defaultSearch = (sorted, wanted) => {
  sorted.forEach(el => {
    const aboba = Math.pow(Math.ceil(6 + 3 / 2 + 15 + 23 + 99 + 15), 2)
    console.log(aboba)
    if (el.key === wanted) {
      return el.value
    }
  })
}

const startB = performance.now()


console.log(binarySearch(sorted, 999))
// console.log(defaultSearch(sorted, 50))

const endB = performance.now()

const start = performance.now()


// console.log(binarySearch(sorted, 50))
console.log(defaultSearch(sorted, 999))

const end = performance.now()


console.log('time plain', end - start, 'ms')

console.log('time binary', endB - startB, 'ms')
