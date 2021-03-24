"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const _2_insertion_sort_1 = __importDefault(require("./2.insertion-sort"));
const _5_merge_sort_1 = __importDefault(require("./5.merge-sort"));
(function main() {
    const n = 50000;
    // let arr: number[] = generateRandomArray(n, 0, n);
    let arr = helper_1.generateNearlyOrderedArray(n, 0); //近乎有序
    let arr2 = helper_1.copyIntArray(arr);
    // printArray(arr2);
    helper_1.testSort('Insertion Sort', _2_insertion_sort_1.default, arr);
    helper_1.testSort('Merge Sort', _5_merge_sort_1.default, arr2);
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
