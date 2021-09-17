// O(n^2)

export function selectionSort0<T>(arr: T[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //每次选择最多只有一次交换操作
    }
  }
}

export function selectionSort1<T>(arr: T[]): void {
  const { length } = arr;
  let left = 0,
    right = length - 1;
  while (left < right) {
    let minIndex = left;
    let maxIndex = right;

    // 在每一轮查找时, 要保证arr[minIndex] <= arr[maxIndex]
    if (arr[minIndex] > arr[maxIndex]) {
      [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
    }

    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      } else if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    if (left !== minIndex) {
      [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    }
    if (right !== maxIndex) {
      [arr[maxIndex], arr[right]] = [arr[right], arr[maxIndex]];
    }
    left++;
    right--;
  }
}

// 选择排序 - 思路：
// 什么是选择排序？
// 遍历数组，选择出最小的元素，先比较，后交换，称为选择
// 选择多少次？
// 经过 n-1 次选择
// 每次选择要比较多少次，这个边界是什么？

// n个元素做多少次选择 每次选择一个元素（最小），选择n-1次，每次选择两个元素（最小&最大），选择n-1/2
// 从n个元素中选择一个最小的
