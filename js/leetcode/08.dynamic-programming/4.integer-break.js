"use strict";
// 343: https://leetcode-cn.com/problems/integer-break/
{
    const memo = [];
    function integerBreak(n) {
        if (n === 1)
            return 1;
        let res = -1;
        if (memo[n])
            return memo[n];
        for (let i = 1; i <= n - 1; i++) {
            res = Math.max(res, i * (n - i), i * integerBreak(n - i));
        }
        memo[n] = res;
        return res;
    }
}
function integerBreak(n) {
    const memo = new Array(n + 1).fill(0);
    memo[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i - 1; j++) {
            memo[i] = Math.max(memo[i], j * (i - j), j * memo[i - j]);
        }
    }
    return memo[n];
}
