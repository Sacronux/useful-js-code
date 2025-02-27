function hasDuplicate(nums) {
        const store = {}
        for (let i = 0; i < nums.length; i++) {
            if (store[nums[i]] !== undefined) {
                return true;
            }
            store[nums[i]] = i
        }

        return false
}