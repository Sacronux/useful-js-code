function threeSum(arr) {
    const sorted = arr.sort((a, b) => a - b);
  
    const output = [];
  
    const target = 0;
  
    const dups = {}
  
    for (let i = 0; i < arr.length; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      const num = arr[i]
  
      while (left < right) {
        const l = arr[left]
        const r = arr[right]
        const sum = l + r + num;
  
        if (sum < target) {
          left++
          continue;
        }
  
        if (sum > target) {
          right--
          continue;
        }
  
        if (dups[arr[left]] && dups[arr[right]] && dups[arr[i]]) {
          left++
          right--
          continue;
        }
  
        if (sum === target) {
          dups[arr[i]] = true
          dups[arr[left]] = true
          dups[arr[right]] = true
          output.push([num, l, r])
          left++
          right--
          continue
        }
      }
    }
  
    return output
  }