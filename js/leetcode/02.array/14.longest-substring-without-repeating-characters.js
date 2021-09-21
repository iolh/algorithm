"use strict";
// 滑动窗口
// 3: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s) {
    const { length } = s;
    const freq = Object.create(null);
    let l = 0, r = -1;
    let res = 0;
    while (l < length) {
        if (r + 1 < length && !freq[s[r + 1]]) {
            freq[s[++r]] = 1; // freq[s[++r]]++
        }
        else {
            freq[s[l++]] = null; // freq[s[l++]]--
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
}
