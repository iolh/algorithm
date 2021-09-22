// 198: https://leetcode-cn.com/problems/house-robber/

{
  let memo: number[] = [];

  function rob(nums: number[]): number {
    memo = new Array(nums.length).fill(-1);
    return tryRob(nums, 0);
  }

  function tryRob(nums: number[], index: number): number {
    if (index === nums.length) {
      return 0;
    }

    if (memo[index] !== -1) {
      return memo[index];
    }

    let res = 0;
    for (let i = index; i < nums.length; i++) {
      res = Math.max(res, nums[i] + tryRob(nums, i + 2));
    }

    return res;
  }
}

function rob(nums: number[]): number {
  const n = nums.length;
  const max = Math.max;
  if (n === 0) return 0;
  const memo = new Array(n).fill(-1);

  memo[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      memo[i] = max(memo[i], nums[j] + (j + 2 < n ? memo[j + 2] : 0));
    }
  }

  return memo[0];
}
