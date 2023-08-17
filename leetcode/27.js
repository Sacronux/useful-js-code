function removeElement(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            if (k !== i) {
                nums[i] = '_'
            }
            k += 1
        } else {
            nums[i] = '_'
        }
    }
    return k;
};

console.log(removeElement([3, 2, 3, 2, 3, 3, 3, 3], 3))