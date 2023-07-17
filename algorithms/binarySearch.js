// const { performance } = require('perf_hooks');
const sorted = []
let i = 0
while(i < 10000) {
  sorted.push({ key: i, value: `value-${i}` })
  i++
}
const binarySearchRecursive = (array, target, start, end) => {
  if (start === undefined) {
    start = 0
  }

  if (end === undefined) {
    end = array.length - 1
  }

  const arrayLength = array.length;

  if (arrayLength === 1) {
    return 0
  }

  if (arrayLength === 0) {
    return null
  }

  const middle = Math.round((end + start) / 2);

  if (array[start].key === target) {
    return start;
  }

  if (array[middle].key === target) {
    return middle;
  }

  if (array[end].key === target) {
    return end;
  }
  if (target < array[middle].key) {
    return binarySearchRecursive(array, target, start, middle)
  }
  
  return binarySearchRecursive(array, target, middle, end)
}

const binarySearchLoop = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.round(end / 2);
  let position = -1;

  while (position === -1) {
    if (target === array[middle].key) {
      position = middle;
      break;
    }
    if (target === array[end].key) {
      position = end;
      break;
    }
    if (target === array[start].key) {
      position = start;
      break;
    }

    if (target < array[middle].key) {
      end = middle;
      middle = Math.round((start + end) / 2)
    } else {
      start = middle;
      middle = Math.round((start + end) / 2)
    }
  }

  return position;
}

console.log(binarySearchLoop(sorted, 999))
console.log('test loop:', sorted[binarySearchLoop(sorted, 999)] === sorted[999])
console.log('test recursive:', sorted[binarySearchRecursive(sorted, 999)] === sorted[999])
