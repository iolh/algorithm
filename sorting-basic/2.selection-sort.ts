export function selectionSort<T>(arr: T[]): void {
  const { length } = arr;
  let left = 0,
    right = length - 1;
  while (left < right) {
    let minIndex = left;
    let maxIndex = right;

    // 在每一轮查找时, 要保证arr[minIndex] <= arr[maxIndex]
    if (arr[minIndex] > arr[maxIndex]) {
      [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
    }

    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      } else if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    if (left !== minIndex) {
      [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    }
    if (right !== maxIndex) {
      [arr[maxIndex], arr[right]] = [arr[right], arr[maxIndex]];
    }
    left++;
    right--;
  }
}

export function selectionSort3<T>(arr: T[]): void {
  const { length } = arr;
  let n = Math.floor(length / 2);
  for (let j = 0; j < n; j++) {
    let minIndex = j;
    let maxIndex = length - 1 - j;
    // 在每一轮查找时, 要保证arr[minIndex] <= arr[maxIndex]
    if (arr[minIndex] > arr[maxIndex]) {
      [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
    }
    for (let i = j + 1; i < length - 1 - j; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      } else if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    if (j !== minIndex) {
      [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
    }
    if (length - 1 - j !== maxIndex) {
      [arr[maxIndex], arr[length - 1 - j]] = [
        arr[length - 1 - j],
        arr[maxIndex],
      ];
    }
  }
}

export function selectionSort1<T>(arr: T[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //每次选择最多只有一次交换操作
    }
  }
}

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

//选择排序：
//n个元素做多少次选择 每次选择一个元素（最小），选择n-1次，每次选择两个元素（最小&最大），选择n-1/2
//从n个元素中选择一个最小的
