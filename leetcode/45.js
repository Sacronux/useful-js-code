var jump1 = function(nums) {
    if (nums.length === 1) {
      return 0
    }
    
    let cur = 0
    let biggest = cur + 1
    let i = 1
    let steps = 0
    if (nums[0] >= nums.length - 1) {
      return 1
    }
    while (i <= nums[cur] + cur) {
      if (nums[cur] + cur >= nums.length - 1) {
        return steps
      }
      if (nums[biggest] + biggest <= nums[i] + i) {
        biggest = i
      }
      if ((i === nums[cur] + cur)) {
        
        cur = biggest;
        steps += 1
        biggest = i
        if (nums[cur] + cur >= nums.length - 1) {
          steps += 1
          return steps
        }
      } else {
        i++
      }
      
    }
    return steps
  };
  
  function jump(nums) {
    let minimumJumps = 0;
    const arrayLength = nums.length;
    let currentJumpEnd = 0;
    let farthestReachableIndex = 0;
  
    for (let currentIndex = 0; currentIndex < arrayLength - 1; ++currentIndex) {
        // Update the farthest reachable index from the current position
        farthestReachableIndex = Math.max(farthestReachableIndex, currentIndex + nums[currentIndex]);
  
        // If we've reached the end of the current jump range,
        // move on to the next jump range
        console.log({ currentIndex, currentJumpEnd, farthestReachableIndex })
        if (currentIndex === currentJumpEnd) {
            minimumJumps++;
            currentJumpEnd = farthestReachableIndex;
        }
    }
  
    return minimumJumps;
  }
  
  const nums = [2, 3, 1, 1, 4];
  const nums1 = [4,0,8,2,0,1,0,1]
  const nums2 = [3, 1]
  const numsfalse = [3,3,2,1,1,4]
  
  
  console.log('steps', jump(nums2));
  