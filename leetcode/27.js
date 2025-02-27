function removeElement(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            if (k !== i) {
                nums[i] = '_'
            }
            k += 1
        } else {
            nums[i] = '_'
        }
    }
    return k;
};

function removeElement(nums, val) {
    let k = 0;
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[j] === val) {
            j--;
            if (i === j && nums[j] !== val) {
                k++
                break;
            }
            continue;
        }

        if (nums[i] === val) {
            nums[i] = nums[j]
            nums[j] = val;
        }

        i++
        k++
    }

    return k
}

var removeElement = function (nums, val) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

console.log(removeElement([3, 2, 3, 2, 3, 3, 3, 3], 3))