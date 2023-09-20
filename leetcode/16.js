var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b)

    let sum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const cur = nums[left] + nums[right] + nums[i]

            // console.log({ nums, cur, sum, target, left, right, i })
            if (target === cur) {
                sum = cur;
                return sum;
            }
            const isCurLessThanSum = Math.abs(target - cur) < Math.abs(target - sum)
            if (isCurLessThanSum) {
                sum = cur;
            }
            if (cur > target) {
                right--
            } else {
                left++
            }
        }
    }

    return sum
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))
