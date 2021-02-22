// function swap(arrA: number, arrB: number): void {
//   // [arrA, arrB] = [arrB, arrA];
// }

function swap<T>(arr: T[], from: number, to: number): void {
  arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

function generateRandomArray(
  n: number,
  rangeL: number,
  rangeR: number
): number[] {
  let arr = new Array(n);
  console.assert(rangeL <= rangeR, 'rangeL 小于等于 rangeR');
  for (let i = 0; i < n; i++) {
    arr[i] = getRandomIntInclusive(rangeL, rangeR);
  }
  return arr;
}

function printArray<T>(arr: T[]): void {
  // arr.forEach((i) => {
  //   console.log(i);
  // });
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function isSorted<T>(arr: T[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function testSort<T>(
  sortName: string,
  sort: (arr: T[]) => void,
  array: T[]
): void {
  console.time(sortName);
  sort(array);
  console.timeEnd(sortName);
  console.assert(isSorted(array));
}
export { swap, generateRandomArray, printArray, testSort };
