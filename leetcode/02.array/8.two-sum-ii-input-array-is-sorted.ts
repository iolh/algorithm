// 167: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

// 暴力解法 O(n^2)

// 二分查找法 O(nlogn)
function twoSum(numbers: number[], target: number): number[] {}

// 对撞指针 O(n)

function twoSum2(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }

  return [];
}
