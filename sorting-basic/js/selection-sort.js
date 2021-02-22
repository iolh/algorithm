"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
function rule(a, b) {
    return a < b;
}
function selectionSort(arr, method) {
    if (method === void 0) { method = rule; }
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (method(arr[j], arr[minIndex])) {
                minIndex = j;
            }
        }
        helper_1.swap(arr, i, minIndex);
    }
}
(function main() {
    // let strArr: string[] = ['d', 'c', 'b', 'a'];
    // selectionSort(strArr);
    // strArr.forEach((i) => {
    //   console.log(i);
    // });
    // selectionSort(arr);
    // printArray(arr);
    var n = 100000;
    var arr = helper_1.generateRandomArray(n, 0, n);
    helper_1.testSort('Selection Sort', selectionSort, arr);
})();
