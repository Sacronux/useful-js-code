/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ''
    let word = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i]
            if (i === s.length - 1) {
                result = `${word}` + (result.length ? ` ${result}` : result)
            }
        } else if ((s[i] === ' ' && s[i - 1] !== ' ')) {
            result = `${word}` + (result.length ? ` ${result}` : result)
            word = ''
        }
    }
    return result
};

console.log(reverseWords("  hello world  "))