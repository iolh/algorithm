"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort2 = exports.insertionSort = void 0;
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let e = arr[i];
        let j;
        for (j = i; j > 0 && arr[j - 1] > e; j--) {
            //插入排序不需要遍历排好序的全部元素，只需要确保每次插入到正确的位置，
            //简言之：可以中断遍历
            arr[j] = arr[j - 1];
        }
        arr[j] = e;
    }
}
exports.insertionSort = insertionSort;
function insertionSort2(arr, l, r) {
    for (let i = l + 1; i <= r; i++) {
        let e = arr[i];
        let j;
        for (j = i; j > l && arr[j - 1] > e; j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = e;
    }
}
exports.insertionSort2 = insertionSort2;
// export default function insertionSort<T>(arr: T[]): void {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//   }
// }
//5 4 3 2 1
//1 4 5 3 2 1
//4 3 5 2 1  3 4 5 2 1
//优化   3 4 5 2 1
//3 5 7 ...  2100    4
// 本质上讲，希尔排序算法是直接插入排序算法的一种改进，
// 减少了其复制的次数，速度要快很多。
// 原因是，当n值很大时数据项每一趟排序需要移动的个数很少，但数据项的距离很长。
// 当n值减小时每一趟需要移动的数据增多，此时已经接近于它们排序后的最终位置。
