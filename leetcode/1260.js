const buildArray = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i] + (len * (nums[nums[i]] % len)); 
    }
    
    for (let i = 0; i < len; i++) {
        nums[i] = Math.floor(nums[i] / len);
    }
    
    return nums;
}