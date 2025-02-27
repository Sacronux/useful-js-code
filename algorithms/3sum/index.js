function threeSum(arr) {
  arr.sort((a, b) => a - b);

  const output = [];

  for (let i = 0; i < arr.length; i++) {
    let left = 1;
    let right = arr.length - 1;

    console.log({ i, left, right, arr })

    while (left < right) {
      const sum = [arr[i], arr[left], arr[right]]
      if (arr[i] + arr[left] + arr[right] === 0) {
        output[output.length] = [arr[i], arr[left], arr[right]]

        while (arr[left] === arr[left + 1]) {
          left++
        }
        while (arr[right] === arr[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
    while (arr[i] === arr[i + 1]) {
      i++
    }
  }

  return output
}

console.log(threeSum([-1,0,1,2,-1,-4], 0))