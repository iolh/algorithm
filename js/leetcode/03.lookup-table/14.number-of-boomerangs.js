"use strict";
// 447: https://leetcode-cn.com/problems/number-of-boomerangs/
// 时间复杂度 O(n^2)
// 空间复杂度 O(n)
function numberOfBoomerangs(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (j !== i) {
                const key = dis(points[i], points[j]);
                map.set(key, map.get(key) ? map.get(key) + 1 : 1);
            }
        }
        for (let [, value] of map) {
            if (value >= 2) {
                res += value * (value - 1);
            }
        }
    }
    return res;
}
function dis(pa, pb) {
    return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1]);
}
