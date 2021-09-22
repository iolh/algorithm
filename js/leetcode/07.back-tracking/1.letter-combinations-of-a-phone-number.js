"use strict";
// 17: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
const letterMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz', // 9
];
function letterCombinations(digits) {
    const res = [];
    if (digits === '')
        return res;
    findCombination(digits, 0, '', res);
    return res;
}
function findCombination(digits, index, s, res) {
    if (index === digits.length) {
        res.push(s);
        return;
    }
    let c = digits[index];
    const letters = letterMap[parseInt(c)];
    for (let i = 0; i < letters.length; i++) {
        findCombination(digits, index + 1, s + letters[i], res);
    }
}
