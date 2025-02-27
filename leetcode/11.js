/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let maxTotal = (right - left) * Math.min(leftMax, rightMax);

    while (left < right) {
        const rightValue = height[right];
        const leftValue = height[left]

        if ((right - left) * Math.min(leftValue, rightValue) > maxTotal) {
            rightMax = rightValue;
            leftMax = leftValue;
            maxTotal = (right - left) * Math.min(leftMax, rightMax)
        } else if ((right - left) * Math.min(leftMax, rightValue) > maxTotal) {
            rightMax = rightValue;
            maxTotal = (right - left) * Math.min(leftMax, rightMax)
            
        } else if ((right - left) * Math.min(leftValue, rightMax) > maxTotal) {
            leftMax = leftValue
            maxTotal = (right - left) * Math.min(leftMax, rightMax)
        }

        if (rightValue >= leftValue) {
            left++
        } else {
            right--
        }
    }
    return maxTotal;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left <= right) {
        let width = right - left;
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width)

        if (height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};