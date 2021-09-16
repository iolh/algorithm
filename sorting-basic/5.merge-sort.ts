// O(nlogn)

import { insertionSort2 } from './3.insertion-sort';

// 合并算法
function __merge<T>(arr: T[], l: number, mid: number, r: number) {
  let aux: T[] = new Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    //处理下归并边界条件
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}

// ======== 递归法 ========

function __mergeSort<T>(arr: T[], l: number, r: number) {
  // 递归到最底下，最短子序列，
  if (l >= r) return;
  // if (r - l <= 15) {
  //   insertionSort2(arr, l, r);
  //   return;
  // }
  let mid: number = Math.floor((l + r) / 2);
  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {
    // 优化
    __merge(arr, l, mid, r);
  }
}

export function mergeSort<T>(arr: T[]): void {
  __mergeSort(arr, 0, arr.length - 1);
}

// ======== 迭代法 ========

export function megeSortBU<T>(arr: T[]): void {
  const { length } = arr;
  let r = length;
  for (let sz = 1; sz <= length; sz += sz) {
    // 循环终止条件，循环内不断做合并操作，除非没有两个子序列可以合并
    for (let i = 0; i + sz < length; i += sz + sz) {
      // 存在子序列,会有一种情况，最右边的右边子序列 长度 小于 size,处理越界情况
      __merge(arr, i, i + sz - 1, Math.min(length, i + sz + sz - 1));
    }
  }
}

// 归并排序 - 思路：
// 1.什么是归并排序？
// 采用分治法,将已有序的子序列合并，得到完全有序的序列。分为递归与合并

// 2.递归开始条件、结束条件？
// 首先要让子序列有序，递归的使子序列有序,要有一个递归函数，既然有子序列，必然要有边界，left,right
//

// 3.如何进行合并？
