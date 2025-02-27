/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let res = '';

  for (let i = 0; i < strs.length; i++) {
      const str = strs[i]
      if (str.length === 0 && i !== strs.length - 1) {
          res += '_'
          continue
      }
      for (let j = 0; j < str.length; j++) {
          res += str[j].charCodeAt();
          if (j === str.length - 1 && i !== strs.length - 1) {
              res += '_'
          } else if (j !== str.length - 1) {
              res += '.'
          }
      }
  }
  return res;
};

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
var decode = function(s) {
  const words = s.split('_');

  let i = 0;
  while (i < words.length) {
      if (words[i].length === 0) {
          i++;
          continue
      }
      let str = words[i].split('.');
      let j = 0;

      while (j < str.length) {
          str[j] = String.fromCharCode(+str[j]);
          j++
      }

      str = str.join('');
      words[i] = str;
      i++
  }

  return words
};

/**
* Your functions will be called as such:
* decode(encode(strs));
*/