/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0
    let left = 0
    let right = height.length - 1
    let leftMax = 0;
    let rightMax = 0
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]
            } else {
                ans += leftMax - height[left]
            }
            left++
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right]
            } else {
                ans += rightMax - height[right]
            }
            right--
        }
    }
    return ans;
};