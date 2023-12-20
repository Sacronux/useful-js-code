const calculate = function (s) {
    let i = 0;
    const calculateInner = (s) => {
      let operand = 0;
      let result = 0;
      let nextOperandSign = 1;
  
      while (i < s.length) {
        let ch = s[i++];
        if (ch === " " || (!isNaN(ch) && ch !== " ")) {
          operand = ch === " " ? operand : 10 * operand + Number(ch);
        } else if (ch === "(") {
          operand = calculateInner(s);
        } else if (ch === ")") {
          break;
        } else {
          result += nextOperandSign * operand;
          nextOperandSign = ch === "+" ? 1 : -1;
          operand = 0;
        }
      }
  
      return result + nextOperandSign * operand;
    };
    return calculateInner(s);
  };