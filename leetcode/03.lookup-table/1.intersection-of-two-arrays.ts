// 349: https://leetcode-cn.com/problems/intersection-of-two-arrays/

// 时间复杂度 O(nlogn)
// 空间复杂度 O(n)

function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const resultSet = new Set<number>();

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      resultSet.add(nums2[i]);
    }
  }

  // const resultArr = [];

  // for (let i of resultSet) {
  //   resultArr.push(i);
  // }

  const resultArr = new Array(...resultSet);

  return resultArr;
}
