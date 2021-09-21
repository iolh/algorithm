"use strict";
// 1: https://leetcode-cn.com/problems/two-sum/
// 时间复杂度 O(n)
// 空间复杂度 O(n)
function twoSum(nums, target) {
    const record = Object.create(Object.prototype);
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (record.hasOwnProperty(complement)) {
            return [i, record[complement]];
        }
        record[nums[i]] = i;
    }
    throw Error('invalid input');
}
