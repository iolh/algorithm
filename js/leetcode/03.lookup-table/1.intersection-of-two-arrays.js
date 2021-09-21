"use strict";
// 349: https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 时间复杂度 O(nlogn)
// 空间复杂度 O(n)
function intersection(nums1, nums2) {
    const set = new Set(nums1);
    const resultSet = new Set();
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            resultSet.add(nums2[i]);
        }
    }
    // const resultArr = [];
    // for (let i of resultSet) {
    //   resultArr.push(i);
    // }
    const resultArr = new Array(...resultSet);
    return resultArr;
}
