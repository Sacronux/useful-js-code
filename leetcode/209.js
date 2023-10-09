/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let count = 1;
    let minimalCount = Infinity;
    let sum = nums[start];


    while (start < nums.length) {
        if (sum >= target) {
            if (count < minimalCount) {
                minimalCount = count
            }
            sum -= nums[start]
            start++
            count--
        } else {
            if (end === nums.length - 1) {
                sum -= nums[start]
                start++
                count--
            } else {
                end++
                sum += nums[end]
                count++
            }
        }
    }

    if (minimalCount <= nums.length) {
        return minimalCount
    } else {
        return 0
    }
}