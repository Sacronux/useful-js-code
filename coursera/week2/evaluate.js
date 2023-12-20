import { LinkedList } from "../../data-structures/linkedList/linkedListSimple.js"


/**
* @param {string} str
* @return {number}
*/
const evaluate = (str) => {
    const values = new LinkedList();
    const operands = new LinkedList();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '+' || char === '*' || char === '-' || char === '/') {
            operands.push(char)
        } else if (!Number.isNaN(Number(char))) {
            values.push(Number(char))
        } else if (char === ')') {
            const op = operands.pop()
            if (op === '+') {
                values.push(values.pop() + values.pop())
            } else if (op === '*') {
                values.push(values.pop() * values.pop())
            } else if (op === '-') {
                const val2 = values.pop();
                const val1 = values.pop();
                values.push(val1 - val2);
            } else if (op === '/') {
                const val2 = values.pop();
                const val1 = values.pop();
                if (val2 !== 0) {
                    values.push(val1 / val2);
                } else {
                    throw new Error("Cannot divide by zero");
                }
            }
        }
    }
    return values.pop()
}

console.log(evaluate('(1-((2+3)*(4*5)))/2')) // division is not working??