import { getRandomIntInclusive } from './helper';
export function quickSort<T>(arr: T[]): void {
  __quickSort(arr, 0, arr.length - 1);
}

function __quickSort<T>(arr: T[], l: number, r: number): void {
  if (l >= r) {
    return;
  }
  const p = __partition(arr, l, r);
  __quickSort(arr, l, p - 1);
  __quickSort(arr, p + 1, r);
}

function __partition<T>(arr: T[], l: number, r: number): number {
  const random = getRandomIntInclusive(l, r);
  [arr[l], arr[random]] = [arr[random], arr[l]];
  const v = arr[l];
  let j = l;
  //arr[l]...arr[j] 小于v,arr[j+1]...arr[r]大于v
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      j++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  if (l !== j) {
    [arr[l], arr[j]] = [arr[j], arr[l]];
  }
  return j;
}

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
