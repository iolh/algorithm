import {
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyIntArray,
} from './helper';

import { bubbleSort } from './1.bubble-sort';
import { selectionSort } from './2.selection-sort';
import { insertionSort } from './3.insertion-sort';
import { shellSort } from './4.shell-sort';
import { mergeSort } from './5.merge-sort';
import { quickSort } from './6.quick-sort';

// (function main(): void {
//   const n = 50000;
//   // let arr: number[] = generateRandomArray(n, 0, n);
//   let arr: number[] = generateNearlyOrderedArray(n, 0); //近乎有序
//   let arr2: number[] = copyIntArray(arr);
//   // printArray(arr2);
//   testSort('Insertion Sort', insertionSort, arr);
//   testSort('Merge Sort', mergeSort, arr2);
// })();

(function main(): void {
  const n = 1000000;
  const arr = generateRandomArray(n, 0, 10); //乱序数组
  // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
  // const arr2 = copyIntArray(arr);
  // const arr3 = copyIntArray(arr);
  const arr4 = copyIntArray(arr);
  const arr5 = copyIntArray(arr);
  const arr6 = copyIntArray(arr);
  // printArray(arr);
  // testSort('Bubble Sort', bubbleSort, arr);
  // testSort('Selection Sort', selectionSort, arr2);
  // testSort('Insertion Sort', insertionSort, arr3);
  testSort('Shell Sort', shellSort, arr4);
  testSort('Merge Sort', mergeSort, arr5);
  testSort('Quik Sort', quickSort, arr6);
})();

// console.log(
//   (function computeMaxCallStackSize() {
//     try {
//       return 1 + computeMaxCallStackSize();
//     } catch (e) {
//       // Call stack overflow
//       return 1;
//     }
//   })()
// );
