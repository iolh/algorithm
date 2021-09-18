"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heapSort3 = exports.heapSort2 = exports.heapSort1 = void 0;
const _1_max_heap_1 = require("./1.max-heap");
// 总的来说，时间复杂度为 O(nlogn)
// O(nlogn) + O(nlogn)
// 1.堆排序
function heapSort1(arr) {
    const maxheap = new _1_max_heap_1.MaxHeap();
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        maxheap.insert(arr[i]);
    }
    for (let i = length - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}
exports.heapSort1 = heapSort1;
// 2.优化 Heapify 直接从 n/2 节点处 shift down
// O(n) + O(nlogn)
// heapify的时间复杂度其实是O(N)的，是小于O(NlogN)的
// 参考：https://coding.imooc.com/learn/questiondetail/GzLgVXkW2WDXkWxb.html
function heapSort2(arr) {
    const maxheap = new _1_max_heap_1.MaxHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}
exports.heapSort2 = heapSort2;
// 3.原地堆排序
function __shiftDown(arr, n, k) {
    // 确保有子树，只要有左孩子就可以了 即 count不能超过 2k 左孩子
    while (2 * k + 1 < n) {
        let j = 2 * k + 1;
        if (j + 1 < n && arr[j + 1] > arr[j]) {
            j++;
        }
        if (arr[k] >= arr[j])
            break;
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k = j;
    }
}
// O(n) + O(nlogn)
function heapSort3(arr) {
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
exports.heapSort3 = heapSort3;
