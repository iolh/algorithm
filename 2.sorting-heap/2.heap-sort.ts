import { MaxHeap } from './1.max-heap';

// 总的来说，时间复杂度为 O(nlogn)

// O(nlogn) + O(nlogn)
// 1.堆排序
export function heapSort1<T>(arr: T[]): void {
  const maxheap = new MaxHeap<T>();
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    maxheap.insert(arr[i]);
  }

  for (let i = length - 1; i >= 0; i--) {
    arr[i] = maxheap.extractMax();
  }
}

// 2.优化 Heapify 直接从 n/2 节点处 shift down
// O(n) + O(nlogn)
// heapify的时间复杂度其实是O(N)的，是小于O(NlogN)的
// 参考：https://coding.imooc.com/learn/questiondetail/GzLgVXkW2WDXkWxb.html

export function heapSort2<T>(arr: T[]): void {
  const maxheap = new MaxHeap<T>(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = maxheap.extractMax();
  }
}

// 3.原地堆排序
function __shiftDown<T>(arr: T[], n: number, k: number): void {
  // 确保有子树，只要有左孩子就可以了 即 count不能超过 2k 左孩子
  while (2 * k + 1 < n) {
    let j = 2 * k + 1;
    if (j + 1 < n && arr[j + 1] > arr[j]) {
      j++;
    }

    if (arr[k] >= arr[j]) break;

    [arr[k], arr[j]] = [arr[j], arr[k]];

    k = j;
  }
}

// O(n) + O(nlogn)
export function heapSort3<T>(arr: T[]): void {
  const { length } = arr;
  // heapify
  // 最后一个非叶子节点的索引 = (n-1-1)/2
  for (let i = (length - 2) / 2; i >= 0; i--) {
    __shiftDown(arr, length, i);
  }

  for (let i = length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    __shiftDown(arr, i, 0);
  }
}

// heapSort1中逐渐将元素插入到堆中的方式，其时间复杂度是O(nlogn)的；
// 但是heapSort2中反向从第一个非叶子节点倒序不断ShiftDown的过程，最终也创建了一个堆，但是其时间复杂度是O(n)的
