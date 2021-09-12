"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function __merge(arr, l, mid, r) {
    let aux = new Array(r - l + 1);
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i];
    }
    let i = l, j = mid + 1;
    for (let k = l; k <= r; k++) {
        //处理下归并边界条件
        if (i > mid) {
            arr[k] = aux[j - l];
            j++;
        }
        else if (j > r) {
            arr[k] = aux[i - l];
            i++;
        }
        else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i++;
        }
        else {
            arr[k] = aux[j - l];
            j++;
        }
    }
}
function __mergeSort(arr, l, r) {
    if (l >= r)
        return;
    // if (r - l <= 15) {
    //   insertionSort2(arr, l, r);
    //   return;
    // }
    let mid = Math.floor((l + r) / 2);
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) {
        // 优化
        __merge(arr, l, mid, r);
    }
}
function mergeSort(arr) {
    __mergeSort(arr, 0, arr.length - 1);
}
exports.mergeSort = mergeSort;