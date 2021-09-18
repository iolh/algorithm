// 迭代法

export function binarySearch<T>(arr: T[], target: T) {
  let l = 0,
    r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor(l + (r - l) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
