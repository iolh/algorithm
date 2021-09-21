"use strict";
// 350: https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
// 时间复杂度 O(nlogn)
// 空间复杂度 O(n)
function intersect(nums1, nums2) {
    let map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], map.get(nums1[i]) ? map.get(nums1[i]) + 1 : 1);
    }
    const resultArr = [];
    for (let i = 0; i < nums2.length; i++) {
        if (map.get(nums2[i]) > 0) {
            resultArr.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1);
        }
    }
    return resultArr;
}
