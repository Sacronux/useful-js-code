/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  let j = 1;


  while (i < nums.length) {
      if (j === nums.length) {
          return nums;
      }
      if (nums[i] === 0) {
          if (nums[j] === 0) {
              j++;
              continue;
          }
          nums[i] = nums[j]
          nums[j] = 0;
          i++
      } else {
          i++
          j++
      }
      
  }
  return nums;
};