/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const collection = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
  
    const opened = [];
  
    if (s.length < 2) {
      return false
    }
  
    for (let i = 0; i < s.length; i++) {
  
      if (collection[s[i]]) {
          opened.push(s[i])
      } else {
          const closingChar = collection[opened[opened.length - 1]]
          if (closingChar === s[i]) {
              opened.pop()
          } else {
              return false
          }
      }
    }
  
    return opened.length > 0 ? false : true
  };