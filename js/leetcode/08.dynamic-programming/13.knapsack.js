"use strict";
// 时间复杂度 O(n*c)
// 空间复杂度 O(n*c)
class Knapsack {
    constructor(w, v, c) {
        this.w = w;
        this.v = v;
        this.c = c;
        const n = w.length;
        this.memo = new Array(n).fill(0).map((_) => new Array(c + 1).fill(-1));
        this.value = this.bestValue(w, v, n - 1, c);
    }
    bestValue(w, v, index, c) {
        if (index < 0 || c <= 0) {
            return 0;
        }
        let res = this.bestValue(w, v, index - 1, c);
        if (this.memo[index][c] !== -1) {
            return this.memo[index][c];
        }
        if (c >= w[index]) {
            res = Math.max(v[index] + this.bestValue(w, v, index - 1, c - w[index]), res);
        }
        this.memo[index][c] = res;
        return res;
    }
    getBestValue() {
        return this.value;
    }
}
