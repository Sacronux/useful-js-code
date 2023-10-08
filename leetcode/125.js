/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1
    while (left < right) {
        const leftValue = s[left]
        const rightValue = s[right]
        const regex = /[a-zA-Z0-9]/
        if (leftValue.match(regex) === null) {
            left++
            continue;
        }
        if (rightValue.match(regex) === null) {
            right--;
            continue;
        }
        if (leftValue.toLowerCase() !== rightValue.toLowerCase()) {
            return false
        }
        left++
        right--
    }
    return true
};