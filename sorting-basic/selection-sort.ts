import { swap, generateRandomArray, printArray, testSort } from './helper';

function rule<T>(a: T, b: T): boolean {
  return a < b;
}

function selectionSort<T>(
  arr: T[],
  method: (a: T, b: T) => boolean = rule
): void {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (method(arr[j], arr[minIndex])) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

(function main(): void {
  // let strArr: string[] = ['d', 'c', 'b', 'a'];
  // selectionSort(strArr);
  // strArr.forEach((i) => {
  //   console.log(i);
  // });
  // selectionSort(arr);
  // printArray(arr);
  let n = 100000;
  let arr: number[] = generateRandomArray(n, 0, n);
  testSort('Selection Sort', selectionSort, arr);
})();
