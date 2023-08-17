function generate(numRows) {
    let p1 = 0;
    let p2 = 0;

    let idx = 1;
    const result = [];
    result[0] = [1];

    while (result[numRows - 1]?.length !== numRows) {
        if (result[idx] === undefined) {
            result[idx] = []
        }

        if (p1 === p2) {
            result[idx][p2] = 1;
            p2 += 1;
        } else if (p2 === idx) {
            result[idx][p2] = 1;
            idx += 1;
            p1 = 0;
            p2 = 0;
        } else {
            const prevRow = result[idx - 1]
            const num1 = prevRow[p1] ?? 0;
            const num2 = prevRow[p2] ?? 0;

            const sum = num1 + num2;
            result[idx][p2] = sum;
            p1 += 1;
            p2 += 1;
        }
    }

    return result;
};

console.log(generate(6))