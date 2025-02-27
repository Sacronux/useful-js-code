function bitonicSearch(arr, num) {
  const peak = findPeak(arr)
  console.log({ peak })
  const asc = binarySearch(arr, num, 0, peak)
  const desc = binarySearch(arr, num, peak + 1, arr.length - 1)

  return asc ?? desc
}

function binarySearch(arr, num, start, end) {
  let left = start;
  let right = end;
  let middle = left + Math.floor((right - left) / 2);
  // console.log({ left, right, middle })
  if (arr[left] >= arr[right]) {
    while (true) {
      // console.log({ left, middle, right, l: arr[left], m: arr[middle], r: arr[right] })
      if (arr[left] === num) {
        return left;
      }
      if (arr[right] === num) {
        return right;
      }
      if (arr[middle] === num) {
        return middle;
      }

      if (left === right || left === middle || right === middle) {
        return null
      }
  
      if (num < arr[middle]) {
        left = middle;
        middle = left + Math.floor((right - left) / 2)
        continue;
      }
  
      right = middle;
      middle = left + Math.floor((right - left) / 2)
    }
    return null;
  }

  while (true) {
    // console.log({ left, middle, right, l: arr[left], m: arr[middle], r: arr[right] })

    if (arr[left] === num) {
      return left;
    }
    if (arr[right] === num) {
      return right;
    }
    if (arr[middle] === num) {
      return middle;
    }

    if (left === right || left === middle || right === middle) {
      return null
    }

    if (num > arr[middle]) {
      left = middle;
      middle = left + Math.floor((right - left) / 2)
      continue;
    }

    right = middle;
    middle = left + Math.floor((right - left) / 2)
  }
}

function findPeak(arr) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(right / 2)

  while (true) {
    if (left === right) {
      return left;
    }
    if ((arr[left] > arr[left + 1]) && (arr[left] > arr[left - 1])) {

      return left;
    }

    if ((arr[middle] > arr[middle + 1]) && (arr[middle] > arr[middle - 1])) {
      return middle;
    }

    if ((arr[right] > arr[right + 1]) && (arr[right] > arr[right - 1])) {
      return right;
    }

    if (arr[left] < arr[middle] || arr[middle] < arr[right]) {
      left = middle;
      middle = left + Math.floor((right - left) / 2)
      continue;
    }

    right = middle;
    middle = left + Math.floor((right - left) / 2)
  }
}

const example1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2]
console.log(bitonicSearch(example1, 21))


/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(num, arr) {
  const { peak, store } = findPeak(arr)

  const asc = binarySearch(arr, num, 0, peak)
  const desc = binarySearch(arr, num, peak + 1, arr.length() - 1)

  console.log({ asc, desc, peak, store })

  if (asc !== null) {
      return asc;
  } else if (desc !== null) {
      return desc
  } else {
      return -1
  }
};

function binarySearch(arr, num, start, end) {
let left = start;
let right = end;
let middle = left + Math.floor((right - left) / 2);

const mI = arr.get(middle);
const lI = arr.get(left);
const rI = arr.get(right)

if (lI >= rI) {
  while (true) {
    const l = left === start ? lI: arr.get(left);
    if (l === num) {
      return left;
    }
    const m = arr.get(middle);
    if (m === num) {
      return middle;
    }
    const r = right === end ? rI: arr.get(right)
    if (r === num) {
      return right;
    }

    if (left === right || left === middle || right === middle) {
      return null
    }

    if (num < m) {
      left = middle;
      middle = left + Math.floor((right - left) / 2)
      continue;
    }

    right = middle;
    middle = left + Math.floor((right - left) / 2)
  }
  return null;
}

while (true) {
  const l = left === start ? lI: arr.get(left);
  if (l === num) {
    return left;
  }
  const m = arr.get(middle);
  if (m === num) {
    return middle;
  }
  const r = right === end ? rI: arr.get(right)
  if (r === num) {
    return right;
  }

  if (left === right || left === middle || right === middle) {
    return null
  }

  if (num > m) {
    left = middle;
    middle = left + Math.floor((right - left) / 2)
    continue;
  }

  right = middle;
  middle = left + Math.floor((right - left) / 2)
}
}

function save(store, idx, arr) {
  if (store[idx] === undefined) {
      const val = arr.get(idx);
      if (val !== undefined) {
          store[idx] = val;
          return val;
      }
  }
  return store[idx];
}

function save(store, idx, arr) {
  if (store[idx] === undefined) {
      const val = arr.get(idx);
      if (val !== undefined) {
          store[idx] = val;
          return val;
      }
  }
  return store[idx];
}

function findPeak(arr) {
let left = 0;
let right = arr.length() - 1;
let middle = Math.floor(right / 2)

const store = {};

let i = 0; 

while (true) {
  if (i >= 5) {
      break;
  }
  i++
  
  if (left === right) {
    return left;
  }

  const m = save(store, middle, arr);
  const l = save(store, left, arr);
  const r = save(store, right, arr);

  const lb = save(store, left + 1, arr)
  const ll = save(store, left - 1, arr)
  const rl = save(store, right - 1, arr)
  const rb = save(store, right + 1, arr)
  const ml = save(store, middle - 1, arr)
  const mb = save(store, middle + 1, arr)

  console.log({ store, left, right, lb, ll, rl, rb, ml, mb, l, r, m, i })


  if ((l > lb) && (l > ll)) {
    return { peak: left, store };
  }

  if ((m > mb) && (m > ml)) {
    return { peak: middle, store };
  }

  if ((r > rb) && (r > rl)) {
    return { peak: right, store };
  }

  if ((l < m) && (l < r)) {
    left = middle;
    middle = left + Math.floor((right - left) / 2)
    continue;
  }
  right = middle;
  middle = left + Math.floor((right - left) / 2)
}
}