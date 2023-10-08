/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    const result = [];
    while (left < right) {
        const l = numbers[left]
        const r = numbers[right]
        if (l + r > target) {
            right--
        } else if (l + r < target) {
            left++
        } else {
            result[0] = left + 1
            result[1] = right + 1
            return result
        }
    }
    return result
};