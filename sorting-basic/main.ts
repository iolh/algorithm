import {
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyIntArray,
} from './helper';

import selectionSort from './1.selection-sort';
import insertionSort from './2.insertion-sort';
import mergeSort from './5.merge-sort';

(function main(): void {
  const n = 50000;
  // let arr: number[] = generateRandomArray(n, 0, n);
  let arr: number[] = generateNearlyOrderedArray(n, 0); //近乎有序
  let arr2: number[] = copyIntArray(arr);
  // printArray(arr2);
  testSort('Insertion Sort', insertionSort, arr);
  testSort('Merge Sort', mergeSort, arr2);
})();

// (function main(): void {
//   const n = 100000;
//   let arr: number[] = generateRandomArray(n, 0, n);
//   // let arr: number[] = generateNearlyOrderedArray(n, 10);//近乎有序
//   let arr2: number[] = copyIntArray(arr);
//   // printArray(arr);
//   testSort('Selection Sort', selectionSort, arr);
//   testSort('Insertion Sort', insertionSort, arr2);
// })();
