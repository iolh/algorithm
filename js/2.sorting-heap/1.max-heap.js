"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = void 0;
class MaxHeap {
    constructor(arr) {
        this.data = [];
        this.count = 0;
        if (arr) {
            const { length } = arr;
            for (let i = 0; i < length; i++) {
                this.data[i + 1] = arr[i];
            }
            this.count = length;
            for (let i = Math.floor(this.count / 2); i >= 1; i--) {
                this.shiftDown(i);
            }
        }
    }
    shiftUp(k) {
        const { data } = this;
        while (k > 1 && data[Math.floor(k / 2)] < data[k]) {
            [data[Math.floor(k / 2)], data[k]] = [data[k], data[Math.floor(k / 2)]];
            k = Math.floor(k / 2);
        }
    }
    shiftDown(k) {
        const { data, count } = this;
        // 确保有子树，只要有左孩子就可以了 即 count不能超过 2k 左孩子
        while (2 * k <= count) {
            let j = 2 * k;
            if (j + 1 <= count && data[j + 1] > data[j]) {
                j++;
            }
            if (data[k] >= data[j])
                break;
            [data[k], data[j]] = [data[j], data[k]];
            k = j;
        }
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    insert(item) {
        this.data[++this.count] = item;
        this.shiftUp(this.count);
    }
    extractMax() {
        const { data, count } = this;
        const ret = this.data[1];
        [data[1], data[count]] = [data[count], data[1]];
        this.count--;
        this.shiftDown(1);
        return ret;
    }
    testPrint() {
        console.log('\n' + '======== 数组实现堆存储 ========' + '\n');
        console.log(this.data);
    }
}
exports.MaxHeap = MaxHeap;
