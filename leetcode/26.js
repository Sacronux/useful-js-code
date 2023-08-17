function removeDuplicates(nums) {
    let k = 1;

    for (let i = 1; i <  nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[k] = nums[i];
            k++
        }
    }

    return k
};

console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 5, 5,]))