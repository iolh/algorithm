import {
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyIntArray,
} from './helper';

import {
  bubbleSort0,
  bubbleSort1,
  bubbleSort2,
  bubbleSort00,
  bubbleSort11,
  bubbleSort22,
} from './1.bubble-sort';
import { selectionSort0, selectionSort1 } from './2.selection-sort';
import { insertionSort0, insertionSort1 } from './3.insertion-sort';
import { shellSort0, shellSort1 } from './4.shell-sort';
import { mergeSort, megeSortBU } from './5.merge-sort';
import { quickSort0, quickSort1, quickSort2 } from './6.quick-sort';

(function main(): void {
  function testBubbleSort() {
    console.log('======== 冒泡排序 ========' + '\n');
    testSort('普通 Bubble Sort', bubbleSort0, arr);
    testSort('优化一 Bubble Sort', bubbleSort1, arr0);
    testSort('优化二 Bubble Sort', bubbleSort2, arr1);
    testSort('普通 + 交换变赋值 Bubble Sort', bubbleSort00, arr2);
    testSort('优化一 + 交换变赋值 Bubble Sort', bubbleSort11, arr3);
    testSort('优化二 + 交换变赋值 Bubble Sort', bubbleSort22, arr4);
    console.log('\n');
  }

  function testSelectionSort() {
    console.log('======== 选择排序 ========' + '\n');
    testSort('Selection Sort 0', selectionSort0, arr0);
    testSort('Selection Sort 1', selectionSort1, arr1);
    console.log('\n');
  }

  function testInsertionSort() {
    console.log('======== 插入排序 ========' + '\n');
    testSort('Insertion Sort 0', insertionSort0, arr0);
    testSort('Insertion Sort 1', insertionSort1, arr1);
    console.log('\n');
  }

  function testShellSort() {
    console.log('======== 希尔排序 ========' + '\n');
    testSort('Shell Sort 0', shellSort0, arr0);
    testSort('Shell Sort 1', shellSort1, arr1);
  }

  function testBaseSort() {
    console.log('======== 基础排序对比 ========' + '\n');
    testSort('Bubble Sort 2', bubbleSort0, arr0);
    testSort('Selection Sort 1', selectionSort1, arr1);
    testSort('Insertion Sort 1', insertionSort1, arr2);
    testSort('优化二 + 交换变赋值 Bubble Sort', bubbleSort00, arr3);
    testSort('Shell Sort 0', shellSort0, arr4);
    console.log('\n');
  }

  function testMergeSort() {
    console.log('======== 归并排序 ========' + '\n');
    testSort('Merge Sort 0', mergeSort, arr0);
    testSort('Merge Sort 1', megeSortBU, arr1);
  }

  function testQuikSort() {
    testSort('Quik Sort 随机化', quickSort0, arr0);
    testSort('Quik Sort 2路快排', quickSort1, arr1);
    testSort('Quik Sort 3路快排', quickSort2, arr2);
  }

  function testAdvancedSort() {
    testSort('Merge Sort 递归法', mergeSort, arr0);
    testSort('Quik Sort 2路快排', quickSort1, arr1);
  }

  const n = 1000000;
  const arr = generateRandomArray(n, 0, n); //乱序数组
  // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
  // const arr = generateNearlyOrderedArray(n, 0); //完全有序
  const arr0 = copyIntArray(arr);
  const arr1 = copyIntArray(arr);
  const arr2 = copyIntArray(arr);
  const arr3 = copyIntArray(arr);
  const arr4 = copyIntArray(arr);

  // ==== 基础排序 ====
  // testBubbleSort();
  // testSelectionSort();
  // testInsertionSort();
  // testShellSort();
  // testBaseSort();

  // ==== 高级排序 ====
  // testMergeSort();
  // testQuikSort();
  testAdvancedSort();
})();

// 逆序对 归并算法

// 第n大的元素
