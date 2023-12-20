/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operands = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const isNumber = !Number.isNaN(Number(token));
    if (isNumber) {
      operands.push(Number(token));
    } else {
      const operator = token;

      const val2 = operands.pop();
      const val1 = operands.pop();

      if (operator === "*") {
        operands.push(
          val2 * val1 > 0 ? Math.floor(val2 * val1) : Math.ceil(val2 * val1)
        );
      } else if (operator === "+") {
        operands.push(
          val2 + val1 > 0 ? Math.floor(val2 + val1) : Math.ceil(val2 + val1)
        );
      } else if (operator === "-") {
        operands.push(
          val1 - val2 > 0 ? Math.floor(val1 - val2) : Math.ceil(val1 - val2)
        );
      } else if (operator === "/") {
        const result =
          val1 / val2 > 0 ? Math.floor(val1 / val2) : Math.ceil(val1 / val2);
        operands.push(result);
      } else {
        console.log("else");
      }
    }
  }

  return operands.pop();
};