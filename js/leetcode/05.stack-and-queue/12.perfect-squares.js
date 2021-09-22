"use strict";
// 279: https://leetcode-cn.com/problems/perfect-squares/
function numSquares(n) {
    const q = [];
    q.push([n, 0]);
    const visited = [];
    visited[n] = true;
    while (q.length !== 0) {
        const e = q.shift();
        const num = e[0];
        const step = e[1];
        for (let i = 1;; i++) {
            let a = num - i * i;
            if (a < 0)
                break;
            if (a === 0)
                return step + 1;
            if (!visited[a]) {
                q.push([a, step + 1]);
                visited[a] = true;
            }
        }
    }
    throw new Error('invalid input');
}
// [[4,0]]
// [[3,1],[0,1]]
// [[0,1]]
// [[0,1],[2,2]]
// [2,2]
