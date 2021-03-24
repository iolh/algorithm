"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rule(a, b) {
    return a < b;
}
function selectionSort(arr, method = rule) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (method(arr[j], arr[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}
exports.default = selectionSort;
// (function main(): void {
//   let arr: string[] = ['d', 'c', 'b', 'a'];
//   selectionSort(arr);
//   printArray(arr);
// })();
// console.time('ooo');
// arr[minIndex] = arr[minIndex] ^ arr[i];
// arr[i] = arr[minIndex] ^ arr[i];
// arr[minIndex] = arr[minIndex] ^ arr[i];
// console.timeEnd('ooo');
// console.time('lll');
// swap(arr, i, minIndex);
// console.timeEnd('lll');
// function swap<T>(arr: T[], from: number, to: number): void {
//   arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
// }
