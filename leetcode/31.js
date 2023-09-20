var nextPermutation1 = function(nums) {
    let permutationIdx = null;
    for (let i = nums.length - 2; i >= 0; i--) {
        let smallestIdx = null
        if (permutationIdx !== null) {
            break;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (!smallestIdx) {
                if (nums[j] > nums[i]) {
                    smallestIdx = j
                }
            }
            if (nums[j] > nums[i] && nums[j] < nums[smallestIdx]) {
                smallestIdx = j
            }
            if (j === nums.length - 1) {
                console.log({ smallestIdx })
                if (smallestIdx) {
                    const saved = nums[i]
                    nums[i] = nums[smallestIdx]
                    nums[smallestIdx] = saved
                    permutationIdx = i
                }
            }
        }
    }
    if (permutationIdx !== null) {
        const spliced = nums.splice(permutationIdx + 1, nums.length).sort((a, b) => a - b)
        nums.push(...spliced)
        return nums
    }
    return nums.sort((a, b) => a - b)
};



// console.log(nextPermutation([1, 1, 5]))