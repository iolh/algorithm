"use strict";
// O(nlogn)
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectNThLargest = exports.quickSort2 = exports.quickSort1 = exports.quickSort0 = void 0;
const helper_1 = require("./helper");
// 随机化快排 用于优化近乎有序数组
function __partition0(arr, l, r) {
    const random = helper_1.getRandomIntInclusive(l, r);
    [arr[l], arr[random]] = [arr[random], arr[l]];
    const v = arr[l];
    let j = l;
    //arr[l]...arr[j] 小于v,arr[j+1]...arr[r]大于v
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
            j++;
        }
    }
    // 如果标定点位置挪动了，就将队首元素放置到标定点，保证标定点前面的元素小于标定点后面的元素
    if (l !== j) {
        [arr[l], arr[j]] = [arr[j], arr[l]];
    }
    return j;
}
function __quickSort0(arr, l, r) {
    if (l >= r) {
        return;
    }
    const p = __partition0(arr, l, r);
    __quickSort0(arr, l, p - 1);
    __quickSort0(arr, p + 1, r);
}
function quickSort0(arr) {
    __quickSort0(arr, 0, arr.length - 1);
}
exports.quickSort0 = quickSort0;
// 双路快排 用于优化大量重复元素数组 置换到两边 保持分区平衡
function __partition1(arr, l, r) {
    const random = helper_1.getRandomIntInclusive(l, r);
    [arr[l], arr[random]] = [arr[random], arr[l]];
    const v = arr[l];
    let i = l + 1, j = r;
    while (true) {
        while (i <= r && arr[i] < v)
            i++;
        while (j >= l + 1 && arr[j] > v)
            j--;
        if (i > j)
            break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    [arr[l], arr[j]] = [arr[j], arr[l]];
    return j;
    // [arr[l], arr[i - 1]] = [arr[i - 1], arr[l]];
    // return i - 1;
}
function __quickSort1(arr, l, r) {
    if (l >= r) {
        return;
    }
    const p = __partition1(arr, l, r);
    __quickSort1(arr, l, p - 1);
    __quickSort1(arr, p + 1, r);
}
function quickSort1(arr) {
    __quickSort1(arr, 0, arr.length - 1);
}
exports.quickSort1 = quickSort1;
// 三路快排 进一步优化大量重复元素数组，开一个区间，不用置换，
// 并且 都等于v已经有序，减少 partition 序列的长度
function __quickSort2(arr, l, r) {
    if (l >= r)
        return;
    const random = helper_1.getRandomIntInclusive(l, r);
    [arr[l], arr[random]] = [arr[random], arr[l]];
    const v = arr[l];
    // [l+1...lt] [lt+1...i][gt...r]
    // [l+1...lt+1] [lt+2...gt) [gt...r]
    let lt = l - 1, gt = r + 1, i = l + 1;
    while (i < gt) {
        if (arr[i] > v) {
            [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]];
            gt--;
        }
        else if (arr[i] < v) {
            [arr[lt + 2], arr[i]] = [arr[i], arr[lt + 2]];
            i++;
            lt++;
        }
        else {
            i++;
        }
    }
    // [l+1...lt+1] [lt+2...gt) [gt...r]
    // [l ...lt] [lt+1...gt) [gt...r]
    [arr[l], arr[lt + 1]] = [arr[lt + 1], arr[l]];
    __quickSort2(arr, l, lt);
    __quickSort2(arr, gt, r);
}
// function __quickSort2<T>(arr: T[], l: number, r: number) {
//   if (l >= r) return;
//   const random = getRandomIntInclusive(l, r);
//   [arr[l], arr[random]] = [arr[random], arr[l]];
//   let e = arr[l];
//   let i = l - 1; // arr[l,...i] < e 初始为空
//   let j = r + 1; // arr[j,...r] > e 初始为空
//   let v = l;
//   while (v < j) {
//     if (arr[v] == e) {
//       v++;
//     } else if (arr[v] < e) {
//       [arr[i + 1], arr[v]] = [arr[v], arr[i + 1]];
//       i++;
//     } else {
//       [arr[v], arr[j - 1]] = [arr[j - 1], arr[v]];
//       j--;
//     }
//   }
//   __quickSort2(arr, l, i);
//   __quickSort2(arr, j, r);
// }
function quickSort2(arr) {
    __quickSort2(arr, 0, arr.length - 1);
}
exports.quickSort2 = quickSort2;
// 快速排序 - 思路：
// 1.什么是快速排序？
// 采用分治法,选定标定点 pivot,对无序的数组递归地进行 partition 操作，
// 每次 partition操作将序列分割成两部分，小于 pivot 和大于 pivot。
// 2.递归开始条件、结束条件？
// 要递归地进行 partition 操作，所以需要递归函数。
// 递归到只有一个元素，无法分割时候结束
// 3.如何进行partition？
// 4. 为什么 i >= j 也可以？
// 当 i >= j 时，性能会有一点提升，可有可无。
// 1.while (i <= r && arr[i] < v) i++ 过滤出的元素是 arr[i] >= v
// 2.while (j >= l + 1 && arr[j] > v) j-- 过滤出的元素是 arr[j] <= v
// 当 i == j 时,说明指向同一元素，同时满足 1，2 说明 arr[i] == arr[j] == v
// 如下序列：
//   3 1 5 3 2 4
//   3 4 2 3 5 1
//   3 4 5 3 2 1
// 使用  i >= j 时 break，i == j，跳出循环，此时 l =0，j=3, i=3，arr[j] 和 arr[l] 发生标定点置换操作（这里也可省略）
// 使用 i > j 时 break, i == j，继续循环（多了一轮循环判断），直到 l=0，j=2，i=4，此时 break，跳出循环，arr[j] 和 arr[l] 发生标定点置换操作
/**
 * 快速排序(递归)  模拟栈解决函数递归调用爆栈问题
 */
// function _quickSort<T>(arr: T[], left: number, right: number) {
//   let stack = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
//   while (stack.length > 0) {
//     // 若stack不为空，循环弹出stack最后一个数组进行快排
//     let now = stack.pop(); // 弹出stack末尾。(也可用stack.shift()取出stack第一个数组，但在数据量较大时，这种方式效率较低)
//     if (now[0] >= now[1]) {
//       // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
//       continue;
//     }
//     let l = now[0],
//       r = now[1];
//     const v = arr[l];
//     let j = l;
//     //arr[l]...arr[j] 小于v,arr[j+1]...arr[r]大于v
//     for (let i = l + 1; i <= r; i++) {
//       if (arr[i] < v) {
//         j++;
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//     }
//     if (l !== j) {
//       [arr[l], arr[j]] = [arr[j], arr[l]];
//     }
//     stack.push([l, j - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入stack即可。
//     stack.push([j + 1, r]); // 将flag右边数组作为待排序数组，只需将左右指针放入stack即可。
//   }
// }
// setTimeout(() => {
//   __quickSort(arr, l, p - 1);
//   __quickSort(arr, p + 1, r);
// }, 0);
//尾调用
function __selectNThLargest(arr, l, r, n) {
    const p = __partition1(arr, l, r); // 采用双路快排
    if (n < p) {
        return __selectNThLargest(arr, l, p - 1, n);
    }
    else if (n > p) {
        return __selectNThLargest(arr, p + 1, r, n);
    }
    console.log('\n' + '======== 第n大元素 ========' + '\n');
    console.log('Array:', arr);
    console.log(`第${arr.length - n}大元素:`, arr[p]);
    return arr[p];
}
function selectNThLargest(arr, n) {
    const { length } = arr;
    return __selectNThLargest(arr, 0, length - 1, length - n);
}
exports.selectNThLargest = selectNThLargest;
