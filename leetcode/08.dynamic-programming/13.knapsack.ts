// 时间复杂度 O(n*c)
// 空间复杂度 O(n*c)

class Knapsack {
  private memo: number[][];
  private value: number;
  private bestValue(
    w: number[],
    v: number[],
    index: number,
    c: number
  ): number {
    if (index < 0 || c <= 0) {
      return 0;
    }

    let res = this.bestValue(w, v, index - 1, c);

    if (this.memo[index][c] !== -1) {
      return this.memo[index][c];
    }

    if (c >= w[index]) {
      res = Math.max(
        v[index] + this.bestValue(w, v, index - 1, c - w[index]),
        res
      );
    }

    this.memo[index][c] = res;

    return res;
  }

  constructor(public w: number[], public v: number[], public c: number) {
    const n = w.length;
    this.memo = new Array(n).fill(0).map((_) => new Array(c + 1).fill(-1));
    this.value = this.bestValue(w, v, n - 1, c);
  }

  getBestValue() {
    return this.value;
  }
}
