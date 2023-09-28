var productExceptSelf = function(nums) {
    const length = nums.length;

    const answer = [];
    answer[0] = 1;
    for (let i = 0; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    let r = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * r;
        r = r * answer[i];
    }
    return answer;
};