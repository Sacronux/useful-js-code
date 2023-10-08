const threeSum = (array) => {
    array.sort((a, b) => a - b);
    
    
    const output = [];

    for (let i = 0; i < array.length; i++) {
        let left = 1;
        let right = array.length - 1;
        while (left < right) {
            const sum = array[left] + array[right] + array[i];
            console.log({ left, right, i })
            if (sum === 0) {
                output[output.length] = [array[left], array[right], array[i]];
                while (array[left] === array[left + 1]) {
                    left++
                }
                while (array[right] === array[right - 1]) {
                    right--
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
        while (array[i] === array[i + 1]) {
            i++
        }
    }

    return output
}

console.log(threeSum([-1,0,1,2,-1,-4]))