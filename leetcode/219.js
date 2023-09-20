var containsNearbyDuplicate = function(nums, k) {
    const cache = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (cache[num] === undefined) {
            cache[num] = i
            continue
        }

        if (cache[num] !== undefined) {
            const distance = Math.abs(cache[num] - i)
            if (distance <= k) {
                return true
            }
            cache[num] = i
        }
    }

    return false
};