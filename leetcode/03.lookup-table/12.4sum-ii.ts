// 454: https://leetcode-cn.com/problems/4sum-ii/

// 时间复杂度 O(n^2)
// 空间复杂度 O(n^2)

function fourSumCount0(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const record = Object.create(Object.prototype);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let thisHalf = nums1[i] + nums2[j];
      record[thisHalf] = record.hasOwnProperty(thisHalf)
        ? record[thisHalf] + 1
        : 1;
    }
  }

  let res = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let thatHalf = nums3[i] + nums4[j];
      if (record.hasOwnProperty(-thatHalf)) {
        res += record[-thatHalf];
      }
    }
  }

  return res;
}

function fourSumCount1(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let thisHalf = nums1[i] + nums2[j];
      map.set(thisHalf, map.get(thisHalf) ? map.get(thisHalf) + 1 : 1);
    }
  }

  let res = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let thatHalf = nums3[i] + nums4[j];
      if (map.get(-thatHalf)) {
        res += map.get(-thatHalf);
      }
    }
  }

  return res;
}
