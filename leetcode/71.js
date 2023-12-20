/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];

    const splitted = path.split('/')

    for (let i = 0; i < splitted.length; i++) {
      const cur = splitted[i];
      if (!cur.length) {
        continue;
      }
      if (cur === '.' || cur === '/') {
        continue;
      }

      if (cur === '..') {
        const lastLevel = stack.pop();
        if (lastLevel === undefined) {
          continue;
        }
      } else {
        stack.push(cur)
      }
    }
    return `/${stack.join('/')}`
};