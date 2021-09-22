// 347: https://leetcode-cn.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
  let freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], freq.get(nums[i]) ? freq.get(nums[i]) + 1 : 1);
  }

  const entries = freq.entries();

  // heapSort3<number[]>([...entries]);

  // js没有优先队列
}

// function __shiftDown<T>(arr: T[], n: number, k: number): void {
//   // 确保有子树，只要有左孩子就可以了 即 count不能超过 2k 左孩子
//   while (2 * k + 1 < n) {
//     let j = 2 * k + 1;
//     if (j + 1 < n && arr[j + 1] > arr[j]) {
//       j++;
//     }

//     if (arr[k] >= arr[j]) break;

//     [arr[k], arr[j]] = [arr[j], arr[k]];

//     k = j;
//   }
// }

// // O(n) + O(nlogn)
// function heapSort3<T>(arr: T[]): void {
//   const { length } = arr;
//   // heapify
//   // 最后一个非叶子节点的索引 = (n-1-1)/2
//   for (let i = (length - 2) / 2; i >= 0; i--) {
//     __shiftDown(arr, length, i);
//   }

//   for (let i = length - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     __shiftDown(arr, i, 0);
//   }
// }
