var canJump = function (nums) {
    let cur = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] >= cur - i) {
        cur = i
        continue;
      }
      if (nums[i] < cur - i) {
        if (i === 0) {
          return false
        }
      }
    }
    return true
  };
  
  const nums = [2, 3, 1, 1, 4];
  const nums1 = [3,0,8,2,0,1,0,1]
  const nums2 = [3,2,1,0,4]
  const numsfalse = [1,1,0,1]
  
  
  console.log(canJump(numsfalse));
  