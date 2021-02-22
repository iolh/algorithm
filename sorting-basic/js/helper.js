"use strict";
// function swap(arrA: number, arrB: number): void {
//   // [arrA, arrB] = [arrB, arrA];
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSort = exports.printArray = exports.generateRandomArray = exports.swap = void 0;
function swap(arr, from, to) {
    arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
}
exports.swap = swap;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
function generateRandomArray(n, rangeL, rangeR) {
    var arr = new Array(n);
    console.assert(rangeL <= rangeR, 'rangeL 小于等于 rangeR');
    for (var i = 0; i < n; i++) {
        arr[i] = getRandomIntInclusive(rangeL, rangeR);
    }
    return arr;
}
exports.generateRandomArray = generateRandomArray;
function printArray(arr) {
    // arr.forEach((i) => {
    //   console.log(i);
    // });
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
exports.printArray = printArray;
function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function testSort(sortName, sort, array) {
    console.time(sortName);
    sort(array);
    console.timeEnd(sortName);
    console.assert(isSorted(array));
}
exports.testSort = testSort;
