// O(n^2)

// 4 5 2 3 1

// 4 2 5 3 1
// 2 4 5 3 1

// e

// 4 5 2 3 1

// 4 2 3 1 5

export function bubbleSort0<T>(arr: T[]): void {
  const { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

export function bubbleSort1<T>(arr: T[]): void {
  let { length } = arr;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 1; i < length; i++) {
      //一次冒泡，从头到尾。遍历不可中断。
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    length--;
  } while (swapped);
}

export function bubbleSort2<T>(arr: T[]): void {
  let newn: number;
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

// 85, 43, 44, 77, 88;

export function bubbleSort00<T>(arr: T[]): void {
  const { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    let j;
    let e;
    for (j = 0, e = arr[j]; j < length - i - 1; j++) {
      if (e > arr[j + 1]) {
        arr[j] = arr[j + 1];
      } else {
        arr[j] = e;
        e = arr[j + 1];
      }
    }
    arr[j] = e;
  }
}

export function bubbleSort11<T>(arr: T[]): void {
  let { length } = arr;
  let swapped: boolean;
  do {
    swapped = false;
    let j;
    let e;
    for (j = 1, e = arr[j - 1]; j < length; j++) {
      if (e > arr[j]) {
        arr[j - 1] = arr[j];
        swapped = true;
      } else {
        arr[j - 1] = e;
        e = arr[j];
      }
    }
    arr[j - 1] = e;
    length--;
  } while (swapped);
}

export function bubbleSort22<T>(arr: T[]): void {
  let newn: number;
  let { length } = arr;
  do {
    newn = 0;
    let i: number;
    let e: T;
    for (i = 1, e = arr[i - 1]; i < length; i++) {
      if (e > arr[i]) {
        arr[i - 1] = arr[i];
        newn = i;
      } else {
        arr[i - 1] = e;
        e = arr[i];
      }
    }
    arr[i - 1] = e;
    length = newn;
  } while (newn > 0);
}

// 冒泡排序 - 思路：
// 1.什么是冒泡排序？
// 两两比较，一次遍历中可以得到无序元素中最大的元素，先交换，后比较，称为冒泡，

// 2.要冒多少次泡？
// 经过 n-1 次冒泡，没有冒泡的元素就是最小的，从而可以得到完全有序的数组

// 3.每次冒泡要比较多少次，这个边界是什么？
// n-i-1, 首先每一轮中对已经冒泡的元素不需要再比较了，它们已经是有序的了，其次也不用和自己比较

// 优化思路：
// bubbleSort1，减少冒泡次数：如果一次冒泡中，没有元素冒泡，说明数组已经有序，就应该中断遍历，不需要继续冒泡了

// bubbleSort2，减少冒泡比较次数：如果一次冒泡中,后面的元素已经有序了，下次冒泡比较次数应该会比 n-i-1 还要少

// 3 1 0 2 4 5
// 1 0 2 3 4 5
// 第一种优化第二次冒泡，会遍历前5个元素
// 第二种优化会遍历前3个元素

// 1）
// 冒泡排序在第k轮循环以后，保证的是最后k个数字有序；
// 而插入排序在第k轮循环以后，保证的是前k个数字有序；

// 2）
// 冒泡排序在第k轮循环以后，最后k个数字就是整个数组排序后的结果，即最后k个数字就是整个数组top k大的数字；
// 而插入排序在第k轮循环以后，前k个数字还是原来数组中的前k个数字。此时，最小值不一定在前k个数字中，可能在后续还没有处理。
// 比较一下，对于冒泡排序，第一轮循环以后，最大的数字就已经放在最后的位置了；
// 第二轮循环以后，第二大的数字就已经放在倒数第二的位置了，以此类推...
