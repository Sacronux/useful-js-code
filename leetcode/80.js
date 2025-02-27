/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 1;
  let j = 1;
  let count = 1;

  while (i < nums.length) {
      if (nums[i] === nums[i - 1]) {
          count++
          if (count > 2) {
              i++;
              continue;
          }
      } else {
          count = 1;
      }
      nums[j] = nums[i]
      i++
      j++
  }

  return j
};