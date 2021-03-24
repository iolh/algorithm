export default function insertionSort<T>(arr: T[]): void {
  for (let i = 1; i < arr.length; i++) {
    let e: T = arr[i];
    let j: number;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}
// export default function insertionSort<T>(arr: T[]): void {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//   }
// }
