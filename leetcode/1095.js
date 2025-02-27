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
var findInMountainArray = function (num, arr) {
  const { peak, store } = findPeak(arr)

  const asc = binarySearch(arr, num, 0, peak, store)
  const desc = binarySearch(arr, num, peak + 1, arr.length() - 1, store)


  if (asc !== null) {
      return asc;
  } else if (desc !== null) {
      return desc
  } else {
      return -1
  }
};

function binarySearch(arr, num, start, end, store) {
  let left = start;
  let right = end;
  let middle = left + Math.floor((right - left) / 2);

  const mI = save(store, middle, arr);
  const lI = save(store, left, arr);
  const rI = save(store, right, arr);

  if (lI >= rI) {
      while (true) {
          const l = left === start ? lI : save(store, left, arr);
          if (l === num) {
              return left;
          }
          const m = save(store, middle, arr);
          if (m === num) {
              return middle;
          }
          const r = right === end ? rI : save(store, right, arr)
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
      const l = left === start ? lI : save(store, left, arr);
      if (l === num) {
          return left;
      }
      const m = save(store, middle, arr);
      if (m === num) {
          return middle;
      }
      const r = right === end ? rI : save(store, right, arr)
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

function findPeak(arr) {
  let left = 0;
  let right = arr.length() - 1;
  let middle = Math.floor(right / 2)

  const store = {};

  while (true) {
      if (left === right) {
          return { peak: left, store };
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