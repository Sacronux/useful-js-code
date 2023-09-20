var rotate1 = function (nums, k) {
    const base = k % nums.length; // 2
    const lastIdx = nums.length - 1;
    const reversed = [];
    for (let i = 0; i < nums.length; i++) {
      const idx = i + base > lastIdx ? i + base - nums.length : i + base;
  
      reversed[idx] = nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
      nums[i] = reversed[i]
    }
  };
  
  const reverse = (nums, start, end) => {
      while (start < end) {
          const saved = nums[start]
          nums[start] = nums[end]
          nums[end] = saved
          start++
          end--
      }
      return nums
  }
  
  const rotate = (nums, k) => {
      k  = k % nums.length
      reverse(nums, 0, nums.length - 1)
      reverse(nums, 0, k - 1)
      reverse(nums, k, nums.length - 1)
  }