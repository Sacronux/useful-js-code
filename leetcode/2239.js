var findClosestNumber = function(nums) {
    let closest = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const absNum = Math.abs(num)

        if (num === 0) {
            return num
        }

        if (absNum === Math.abs(closest) && num > 0) {
            closest = num
        }

        if (absNum < Math.abs(closest)) {
            closest = num;
        }
    }

    return closest
};