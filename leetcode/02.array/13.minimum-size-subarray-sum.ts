// 209: https://leetcode-cn.com/problems/minimum-size-subarray-sum/

// 暴力解法：O(n^3)
function minSubArrayLen(target: number, nums: number[]): number {}

// 滑动窗口
// 时间复杂度 O(n)
// 空间复杂度 O(1)
function minSubArrayLen2(target: number, nums: number[]): number {
  const { length } = nums;
  let l = 0,
    r = -1;

  let sum = 0;
  let res = length + 1;

  while (l < length) {
    if (r + 1 < length && sum < target) {
      sum += nums[++r];
    } else {
      sum -= nums[l++];
    }

    if (sum >= target) {
      res = Math.min(res, r - l + 1);
    }
  }

  if (res === length + 1) return 0;

  return res;
}
