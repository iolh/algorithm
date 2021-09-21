import { MaxHeap } from './1.max-heap';
import { heapSort1, heapSort2, heapSort3 } from './2.heap-sort';
import {
  generateNearlyOrderedArray,
  generateRandomArray,
  testSort,
} from './helper';

// 数组实现堆
function testMaxHeap() {
  const maxheap = new MaxHeap();
  const arr = [5, 11, 7, 2, 3, 17];

  for (let i = 0; i < arr.length; i++) {
    // const random = Math.floor(Math.random() * 100);
    // arr.push(random);
    // 最大堆入队
    // maxheap.insert(random);
    maxheap.insert(arr[i]);
  }
  // console.log('======== 原数组 ========' + '\n');
  // console.log(arr);

  maxheap.testPrint();

  console.log('\n' + '======== 堆出队顺序 ========' + '\n');
  while (!maxheap.isEmpty()) {
    // 最大堆出队
    console.log(maxheap.extractMax());
  }
}
testMaxHeap();

// 堆排序
function testHeapSort() {
  const n = 1000000;
  const arr = generateRandomArray(n, 0, n); //乱序数组
  // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
  // const arr = generateNearlyOrderedArray(n, 0); //完全有序
  testSort('Heap Sort 1', heapSort1, arr);
  testSort('Heap Sort 2', heapSort2, arr);
  testSort('Heap Sort 3', heapSort3, arr);
}

// testHeapSort();
