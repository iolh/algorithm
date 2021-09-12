"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort3 = exports.bubbleSort2 = exports.bubbleSort1 = exports.bubbleSort0 = exports.bubbleSort = void 0;
function bubbleSort(arr) {
    let { length } = arr;
    let newn = 1;
    while (newn > 0) {
        newn = 0;
        for (let i = 1; i < length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                newn = i;
            }
        }
        length = newn;
    }
}
exports.bubbleSort = bubbleSort;
function bubbleSort0(arr) {
    const { length } = arr;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
exports.bubbleSort0 = bubbleSort0;
function bubbleSort1(arr) {
    let { length } = arr;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let j = 0; j < length - 1; j++) {
            //一次冒泡，从头到尾。遍历不可中断。
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        length--;
    }
}
exports.bubbleSort1 = bubbleSort1;
function bubbleSort2(arr) {
    let { length } = arr;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        length--;
    } while (swapped);
}
exports.bubbleSort2 = bubbleSort2;
function bubbleSort3(arr) {
    let newn;
    let { length } = arr;
    do {
        newn = 0;
        for (let i = 1; i < length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                newn = i;
            }
        }
        length = newn;
    } while (newn > 0);
}
exports.bubbleSort3 = bubbleSort3;
//冒泡排序：
//1. 使用while替代for循环，内部循环没有使用外部循环变量。
//2. 需要多少次冒泡取决于数组是否有序。
//3. 每次循环冒泡后无序的元素会变少。
//优化思路：
//3 1 0 2 4 5
//1 0 2 3 4 5
//第一种优化第二次冒泡，会遍历前5个元素
//第二种优化会遍历前3个元素
