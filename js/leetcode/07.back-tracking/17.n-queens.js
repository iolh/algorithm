"use strict";
// 51: https://leetcode-cn.com/problems/n-queens/
function solveNQueens(n) {
    const row = [];
    let res = [];
    let col = [];
    let dia1 = [];
    let dia2 = [];
    col = new Array(n).fill(false);
    dia1 = new Array(2 * n - 1).fill(false);
    dia2 = new Array(2 * n - 1).fill(false);
    putQueen(n, 0, row, res, col, dia1, dia2);
    return res;
}
function putQueen(n, index, row, res, col, dia1, dia2) {
    if (index === n) {
        res.push(gernerateBoard(n, row));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
            row.push(i);
            col[i] = true;
            dia1[index + i] = true;
            dia2[index - i + n - 1] = true;
            putQueen(n, index + 1, row, res, col, dia1, dia2);
            col[i] = false;
            dia1[index + i] = false;
            dia2[index - i + n - 1] = false;
            row.pop();
        }
    }
}
function gernerateBoard(n, row) {
    const board = new Array(n).fill('.'.repeat(n));
    for (let i = 0; i < n; i++) {
        board[i] =
            board[i].substring(0, row[i]) + 'Q' + board[i].substring(row[i] + 1);
    }
    return board;
}
