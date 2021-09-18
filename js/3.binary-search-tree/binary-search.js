"use strict";
// 迭代法
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1;
    let mid;
    while (l <= r) {
        mid = Math.floor(l + (r - l) / 2);
        if (target === arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
