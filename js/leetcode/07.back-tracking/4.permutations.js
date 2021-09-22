"use strict";
// 46: https://leetcode-cn.com/problems/permutations/
function permute(nums) {
    const res = [];
    const used = [];
    if (nums.length === 0)
        return res;
    const p = [];
    gerneratePermutation(nums, 0, p, res, used);
    return res;
}
function gerneratePermutation(nums, index, p, res, used) {
    if (index === nums.length) {
        res.push(p);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            p.push(nums[i]);
            used[i] = true;
            gerneratePermutation(nums, index + 1, [...p], res, used);
            p.pop();
            used[i] = false;
        }
    }
}
