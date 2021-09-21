"use strict";
// 220: https://leetcode-cn.com/problems/contains-duplicate-iii/
function containsNearbyAlmostDuplicate(nums, k, t) {
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let n of record) {
            if (Math.abs(nums[i] - n) <= t) {
                return true;
            }
        }
        record.add(nums[i]);
        if (record.size === k + 1) {
            record.delete(nums[i - k]);
        }
    }
    return false;
}
