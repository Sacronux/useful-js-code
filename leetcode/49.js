/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const store = {};
  for (let i = 0; i < strs.length; i++) {
      const alphabet = new Array(26).fill(0);

      const string = strs[i];
      for (let j = 0; j < string.length; j++) {
          const idx = string[j].charCodeAt() - 'a'.charCodeAt();
          alphabet[idx] += 1;
      }
      const key = alphabet.join('_');
      if (store[key]) {
          store[key].push(string)
      } else {
          store[key] = [string];
      }
  }
  return Object.values(store);
};