// Boyer-Moore Majority Voting Algorithm
var majorityElement = function(nums) {
    let count = 1
    let cur = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            cur = nums[i]
        } else {
            if (cur !== nums[i]) {
                count--
            } else {
                count++
            }
        }
    }
    return cur

};

var majorityElementFirst = function(nums) {
    nums.sort((a, b) => a - b);
    let num = nums[0]
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== num) {
            num = nums[i]
            count = 1
        } else {
            count += 1
        }

        if (count >= nums.length / 2) {
            return num
        }

    }
    return num
};