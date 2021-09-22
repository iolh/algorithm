"use strict";
// 77: https://leetcode-cn.com/problems/combinations/
function combine(n, k) {
    const res = [];
    if (n <= 0 || k <= 0 || k > n)
        return res;
    const c = [];
    generateCombination(n, k, 1, c, res);
    return res;
}
function generateCombination(n, k, start, c, res) {
    if (c.length === k) {
        res.push(c);
        return;
    }
    // for (let i = start; i <= n; i++) {
    // 剪枝优化
    for (let i = start; i <= n - (k - c.length) + 1; i++) {
        c.push(i);
        generateCombination(n, k, i + 1, [...c], res);
        c.pop();
    }
}
