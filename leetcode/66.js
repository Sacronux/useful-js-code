function plusOneJs(digits) {
    const joined = BigInt(digits.join('')) + BigInt(1);
    return joined.toString().split('').map(d => Number(d))
};

function plusOne(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        
        const num = digits[i];

        if (i === 0 && num === 9) {
            digits[i] = 0;
            digits.unshift(1);
            break;
        }

        if (num + 1 > 9) {
            digits[i] = 0;
        } else {
            digits[i] = num + 1
            break;
        }
    }
    return digits
}

console.log(plusOne([9,9]))
