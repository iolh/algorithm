import { generateRandomArray, printArray, testSort } from './helper';

function rule<T>(a: T, b: T): boolean {
  return a < b;
}

export default function selectionSort<T>(
  arr: T[],
  method: (a: T, b: T) => boolean = rule
): void {
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
