/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let idx1 = 0;
  let idx2 = 0;
  let result = ''
  while (result.length < word1.length + word2.length) {
      if (idx1 === word1.length) {
          result += word2[idx2]
          idx2++
          continue
      }
      if (idx2 === word2.length) {
          result += word1[idx1]
          idx1++
          continue
      }
      result += word1[idx1]
      result += word2[idx2]
      idx1++
      idx2++
  }
  return result
};