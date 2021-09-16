"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNearlyOrderedArray = exports.copyIntArray = exports.testSort = exports.printArray = exports.generateRandomArray = exports.getRandomIntInclusive = void 0;
//生成闭区间随机数
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
exports.getRandomIntInclusive = getRandomIntInclusive;
//生成有n个元素的随机数组，每个元素的随机范围为[rangeL,rangeR]
function generateRandomArray(n, rangeL, rangeR) {
    console.log('乱序数组 - 数据规模：' + n);
    let arr = new Array(n);
    console.assert(rangeL <= rangeR, 'rangeL 必须小于等于 rangeR！');
    for (let i = 0; i < n; i++) {
        arr[i] = getRandomIntInclusive(rangeL, rangeR);
    }
    return arr;
}
exports.generateRandomArray = generateRandomArray;
//生成近乎有序数组
function generateNearlyOrderedArray(n, swapTimes) {
    if (swapTimes) {
        console.log('近乎有序 - 数据规模：' + n);
    }
    else {
        console.log('完全有序 - 数据规模：' + n);
    }
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    for (let i = 0; i < swapTimes; i++) {
        let posx = getRandomIntInclusive(0, n - 1);
        let posy = getRandomIntInclusive(0, n - 1);
        [arr[posx], arr[posy]] = [arr[posy], arr[posx]];
    }
    return arr;
}
exports.generateNearlyOrderedArray = generateNearlyOrderedArray;
//打印数组
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
exports.printArray = printArray;
//是否有序
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
//测试算法效率
function testSort(sortName, sort, array) {
    console.time(sortName);
    sort(array);
    console.timeEnd(sortName);
    console.assert(isSorted(array), '排序失败!');
}
exports.testSort = testSort;
//浅复制数组
function copyIntArray(arr) {
    return [...arr];
}
exports.copyIntArray = copyIntArray;
