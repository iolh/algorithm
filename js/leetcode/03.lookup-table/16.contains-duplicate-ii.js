"use strict";
// 219: https://leetcode-cn.com/problems/contains-duplicate-ii/
// 时间复杂度 O(n)
// 空间复杂度 O(k)
function containsNearbyDuplicate(nums, k) {
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (record.has(nums[i])) {
            return true;
        }
        record.add(nums[i]);
        if (record.size === k + 1) {
            record.delete(nums[i - k]);
        }
    }
    return false;
}
