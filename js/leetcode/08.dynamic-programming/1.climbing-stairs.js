"use strict";
// 70: https://leetcode-cn.com/problems/climbing-stairs/
// const memo: number[] = [];
function climbStairs(n) {
    const memo = [1, 1];
    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}
{
    const memo = [];
    function climbStairs(n) {
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (!memo[n]) {
            memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
        }
        return memo[n];
    }
}
