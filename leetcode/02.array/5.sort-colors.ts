// https://leetcode-cn.com/problems/sort-colors/

// 计数排序

// 时间复杂度 O(n)
// 空间复杂度 O(1)

function sortColors(nums: number[]): void {
  const count = [0, 0, 0];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // if (nums[i] === 0) {
    //   count[0]++;
    // }
    // if (nums[i] === 1) {
    //   count[1]++;
    // }
    // if (nums[i] === 2) {
    //   count[2]++;
    // }

    count[nums[i]]++;
  }
  // ====================
  // while (count[0] > 0) {
  //   nums.shift();
  //   nums.push(0);
  //   count[0]--;
  // }
  // while (count[1] > 0) {
  //   nums.shift();
  //   nums.push(1);
  //   count[1]--;
  // }
  // while (count[2] > 0) {
  //   nums.shift();
  //   nums.push(2);
  //   count[2]--;
  // }

  // ====================
  // const k = count.length;
  // for (let i = 0; i < k; i++) {
  //   for (let j = 0; j < count[i]; j++) {
  //     nums.shift();
  //     nums.push(i);
  //   }
  // }

  // ====================

  let k = 0;

  for (let i = 0; i < count[0]; i++) {
    nums[k++] = 0;
  }
  for (let i = 0; i < count[1]; i++) {
    nums[k++] = 1;
  }
  for (let i = 0; i < count[2]; i++) {
    nums[k++] = 2;
  }
}

// 三路排序

function sortColors2(nums: number[]): void {
  let j = -1,
    k = nums.length;

  for (let i = 0; i < k; ) {
    if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      k--;
      [nums[i], nums[k]] = [nums[k], nums[i]];
    } else {
      j++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
}
