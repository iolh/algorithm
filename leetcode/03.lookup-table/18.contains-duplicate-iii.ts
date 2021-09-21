// 220: https://leetcode-cn.com/problems/contains-duplicate-iii/

function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  const record = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    for (let n of record) {
      if (Math.abs(nums[i] - n) <= t) {
        return true;
      }
    }

    record.add(nums[i]);

    if (record.size === k + 1) {
      record.delete(nums[i - k]);
    }
  }

  return false;
}
