"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const _4_shell_sort_1 = require("./4.shell-sort");
const _5_merge_sort_1 = require("./5.merge-sort");
const _6_quick_sort_1 = require("./6.quick-sort");
// (function main(): void {
//   const n = 50000;
//   // let arr: number[] = generateRandomArray(n, 0, n);
//   let arr: number[] = generateNearlyOrderedArray(n, 0); //近乎有序
//   let arr2: number[] = copyIntArray(arr);
//   // printArray(arr2);
//   testSort('Insertion Sort', insertionSort, arr);
//   testSort('Merge Sort', mergeSort, arr2);
// })();
(function main() {
    const n = 1000000;
    const arr = helper_1.generateRandomArray(n, 0, 10); //乱序数组
    // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
    // const arr2 = copyIntArray(arr);
    // const arr3 = copyIntArray(arr);
    const arr4 = helper_1.copyIntArray(arr);
    const arr5 = helper_1.copyIntArray(arr);
    const arr6 = helper_1.copyIntArray(arr);
    // printArray(arr);
    // testSort('Bubble Sort', bubbleSort, arr);
    // testSort('Selection Sort', selectionSort, arr2);
    // testSort('Insertion Sort', insertionSort, arr3);
    helper_1.testSort('Shell Sort', _4_shell_sort_1.shellSort, arr4);
    helper_1.testSort('Merge Sort', _5_merge_sort_1.mergeSort, arr5);
    helper_1.testSort('Quik Sort', _6_quick_sort_1.quickSort, arr6);
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
