// 27: https://leetcode-cn.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.unshift(...nums.splice(i, 1));
      k++;
    }
  }
  nums.splice(0, k);
  return nums.length;
}
