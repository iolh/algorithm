"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_max_heap_1 = require("./1.max-heap");
const _2_heap_sort_1 = require("./2.heap-sort");
const helper_1 = require("./helper");
// 数组实现堆
function testMaxHeap() {
    const maxheap = new _1_max_heap_1.MaxHeap();
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
    const arr = helper_1.generateRandomArray(n, 0, n); //乱序数组
    // const arr = generateNearlyOrderedArray(n, 10); //近乎有序
    // const arr = generateNearlyOrderedArray(n, 0); //完全有序
    helper_1.testSort('Heap Sort 1', _2_heap_sort_1.heapSort1, arr);
    helper_1.testSort('Heap Sort 2', _2_heap_sort_1.heapSort2, arr);
    helper_1.testSort('Heap Sort 3', _2_heap_sort_1.heapSort3, arr);
}
// testHeapSort();
