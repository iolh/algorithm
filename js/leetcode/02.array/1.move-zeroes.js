"use strict";
// 283: https://leetcode-cn.com/problems/move-zeroes/
function moveZeroes0(nums) {
    const nonZeroElments = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nonZeroElments.push(nums[i]);
        }
    }
    for (let i = 0; i < nonZeroElments.length; i++) {
        nums[i] = nonZeroElments[i];
    }
    for (let i = nonZeroElments.length; i < nums.length; i++) {
        nums[i] = 0;
    }
}
function moveZeroes1(nums) {
    let k = 0;
    const { length } = nums;
    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i];
        }
    }
    for (let i = k; i < length; i++) {
        nums[i] = 0;
    }
}
function moveZeroes2(nums) {
    let k = 0;
    const { length } = nums;
    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            if (i !== k) {
                [nums[k], nums[i]] = [nums[i], nums[k]];
                k++;
            }
            else {
                k++;
            }
        }
    }
}
function moveZeroes3(nums) {
    let l = 0, r = 0;
    while (r < nums.length) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r++;
        }
        r++;
    }
}
