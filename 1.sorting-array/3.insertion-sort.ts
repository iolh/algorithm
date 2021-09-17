// O(n^2)

export function insertionSort0<T>(arr: T[]): void {
  const { length } = arr;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      // swap
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
}

export function insertionSort1<T>(arr: T[]): void {
  for (let i = 1; i < arr.length; i++) {
    let e: T = arr[i];
    let j: number;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      //插入排序不需要遍历排好序的全部元素，只需要确保每次插入到正确的位置，
      //简言之：可以中断遍历
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

// 此算法用于优化归并排序
export function insertionSort2<T>(arr: T[], l: number, r: number): void {
  for (let i = l + 1; i <= r; i++) {
    let e: T = arr[i];
    let j: number;
    for (j = i; j > l && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

// 插入排序 - 思路：
// 什么是插入排序？
// 把元素放入到合适的位置
// 元素插入多少次？
// 进行 k 次插入，则数组有 k+1 个元素是有序的，所以 n个元素 总共需要插入 n-1 次

// 每次插入元素要比较多少次，这个边界是什么？

// 在第k次插入时，会对前面k个元素进行比较直到找到比第 k+1 个元素小的停止，因为前面数组是有序的
// 在插入时，两两比较，交换位置

// 优化思路：
// 交换操作等于三次赋值操作，
