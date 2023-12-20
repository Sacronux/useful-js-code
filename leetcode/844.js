function backspaceCompare(S, T) {
    return build(S) === build(T);
}

function build(S) {
    let ans = [];
    for (let c of S) {
        if (c !== '#') {
            ans.push(c);
        } else if (ans.length !== 0) {
            ans.pop();
        }
    }
    return ans.join('');
}

// Test
console.log(backspaceCompare("ab#c", "ad#c")); // true
