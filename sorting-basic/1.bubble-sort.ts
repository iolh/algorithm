export function bubbleSort<T>(arr: T[]): void {
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

export function bubbleSort2<T>(arr: T[]): void {
  let { length } = arr;
  let swapped: boolean;
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

export function bubbleSort3<T>(arr: T[]): void {
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

//冒泡排序：
//1. 使用while替代for循环，内部循环没有使用外部循环变量。
//2. 需要多少次冒泡取决于数组是否有序。
//3. 每次循环冒泡后无序的元素会变少。
//优化思路：
//3 1 0 2 4 5
//1 0 2 3 4 5
//第一种优化第二次冒泡，会遍历前5个元素
//第二种优化会遍历前3个元素
