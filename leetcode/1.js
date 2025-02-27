/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const store = {};
  const sum = []
  for (let i = 0; i < nums.length; i++) {
      const wanted = target - nums[i]
      if (store[wanted] !== undefined) {
          sum[0] = Math.min(i, store[wanted])
          sum[1] = Math.max(i, store[wanted])
          return sum;
      }
      store[nums[i]] = i;
  }
};