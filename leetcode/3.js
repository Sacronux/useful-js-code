/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length
    }
    let left = 0;
    let right = 0;
    let maxLength = 1;
    const stash = [];

    const increaseLeft = () => {
        const value = s[left];
        delete stash[value];
        left++
    }

    while (left < s.length && right < s.length) {
        const leftValue = s[left];
        const rightValue = s[right];

        if (stash[rightValue] !== undefined) {
            increaseLeft()
        } else {
            stash[rightValue] = right
            if ((right - left) + 1 > maxLength) {
                maxLength = (right - left) + 1 
            }
            right++
        }
    }
    return maxLength
};

console.log(lengthOfLongestSubstring("pwpkew"))