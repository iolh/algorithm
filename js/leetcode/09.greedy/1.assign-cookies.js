"use strict";
// 455: https://leetcode-cn.com/problems/assign-cookies/
function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let gi = 0;
    let si = 0;
    let res = 0;
    while (gi < g.length && si < s.length) {
        if (s[si] >= g[gi]) {
            res++;
            si++;
            gi++;
        }
        else {
            gi++;
        }
    }
    return res;
}
