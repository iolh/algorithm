"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const _1_bubble_sort_1 = require("./1.bubble-sort");
const _2_selection_sort_1 = require("./2.selection-sort");
const _3_insertion_sort_1 = require("./3.insertion-sort");
const _4_shell_sort_1 = require("./4.shell-sort");
const _5_merge_sort_1 = require("./5.merge-sort");
const _6_quick_sort_1 = require("./6.quick-sort");
function testSortUses() {
    function testBubbleSort() {
        console.log('======== 冒泡排序 ========' + '\n');
        helper_1.testSort('普通 Bubble Sort', _1_bubble_sort_1.bubbleSort0, arr);
        helper_1.testSort('优化一 Bubble Sort', _1_bubble_sort_1.bubbleSort1, arr0);
        helper_1.testSort('优化二 Bubble Sort', _1_bubble_sort_1.bubbleSort2, arr1);
        helper_1.testSort('普通 + 交换变赋值 Bubble Sort', _1_bubble_sort_1.bubbleSort00, arr2);
        helper_1.testSort('优化一 + 交换变赋值 Bubble Sort', _1_bubble_sort_1.bubbleSort11, arr3);
        helper_1.testSort('优化二 + 交换变赋值 Bubble Sort', _1_bubble_sort_1.bubbleSort22, arr4);
        console.log('\n');
    }
    function testSelectionSort() {
        console.log('======== 选择排序 ========' + '\n');
        helper_1.testSort('Selection Sort 0', _2_selection_sort_1.selectionSort0, arr0);
        helper_1.testSort('Selection Sort 1', _2_selection_sort_1.selectionSort1, arr1);
        console.log('\n');
    }
    function testInsertionSort() {
        console.log('======== 插入排序 ========' + '\n');
        helper_1.testSort('Insertion Sort 0', _3_insertion_sort_1.insertionSort0, arr0);
        helper_1.testSort('Insertion Sort 1', _3_insertion_sort_1.insertionSort1, arr1);
        console.log('\n');
    }
    function testShellSort() {
        console.log('======== 希尔排序 ========' + '\n');
        helper_1.testSort('Shell Sort 0', _4_shell_sort_1.shellSort0, arr0);
        helper_1.testSort('Shell Sort 1', _4_shell_sort_1.shellSort1, arr1);
    }
    function testBaseSort() {
        console.log('======== 基础排序对比 ========' + '\n');
        helper_1.testSort('Bubble Sort 2', _1_bubble_sort_1.bubbleSort0, arr0);
        helper_1.testSort('Selection Sort 1', _2_selection_sort_1.selectionSort1, arr1);
        helper_1.testSort('Insertion Sort 1', _3_insertion_sort_1.insertionSort1, arr2);
        helper_1.testSort('优化二 + 交换变赋值 Bubble Sort', _1_bubble_sort_1.bubbleSort00, arr3);
        helper_1.testSort('Shell Sort 0', _4_shell_sort_1.shellSort0, arr4);
        console.log('\n');
    }
    function testMergeSort() {
        console.log('======== 归并排序 ========' + '\n');
        helper_1.testSort('Merge Sort 0', _5_merge_sort_1.mergeSort, arr0);
        helper_1.testSort('Merge Sort 1', _5_merge_sort_1.megeSortBU, arr1);
    }
    function testQuikSort() {
        helper_1.testSort('Quik Sort 随机化', _6_quick_sort_1.quickSort0, arr0);
        helper_1.testSort('Quik Sort 2路快排', _6_quick_sort_1.quickSort1, arr1);
        helper_1.testSort('Quik Sort 3路快排', _6_quick_sort_1.quickSort2, arr2);
    }
    function testAdvancedSort() {
        helper_1.testSort('Merge Sort 递归法', _5_merge_sort_1.mergeSort, arr0);
        helper_1.testSort('Quik Sort 2路快排', _6_quick_sort_1.quickSort1, arr1);
    }
    const n = 5000000;
    const arr = helper_1.generateRandomArray(n, 0, n); //乱序数组
    // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
    // const arr = generateNearlyOrderedArray(n, 0); //完全有序
    const arr0 = helper_1.copyIntArray(arr);
    const arr1 = helper_1.copyIntArray(arr);
    const arr2 = helper_1.copyIntArray(arr);
    const arr3 = helper_1.copyIntArray(arr);
    const arr4 = helper_1.copyIntArray(arr);
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
}
// ==== 排序问题 ====
testSortUses();
function testOtherUses() {
    const n = 5;
    const arr0 = helper_1.generateRandomArray(n, 0, n);
    const arr1 = helper_1.copyIntArray(arr0);
    // 归并排序 - 逆序对
    _5_merge_sort_1.inversionCount(arr0);
    // 快速排序 - 第n大
    _6_quick_sort_1.selectNThLargest(arr1, 2);
}
// ==== 延伸问题 ====
// testOtherUses();
// 逆序对 归并算法
// 第n大的元素
// [3, 2, 1];
// 未涉及排序算法：计数排序、桶排序、基数排序
