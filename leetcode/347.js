/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const store = {}

      for (let i = 0; i < nums.length; i++) {
          const num = nums[i]
          if (store[num]) {
              store[num] += 1;
              continue;
          }
          store[num] = 1;
      }

      const output = Object.keys(store).sort((a, b) => store[b] - store[a]).map((e) => +e)
      output.length = k
      return output
};