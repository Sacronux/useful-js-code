/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subIdx = 0;
    let subChar = s[subIdx]
    for (let i = 0; i < t.length; i++) {
        if (subChar === t[i]) {
            subIdx++
            subChar = s[subIdx]
        }
    }
    return subIdx === s.length
};