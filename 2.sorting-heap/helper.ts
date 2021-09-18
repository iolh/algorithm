//生成闭区间随机数
export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

// Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)

//生成有n个元素的随机数组，每个元素的随机范围为[rangeL,rangeR]
function generateRandomArray(
  n: number,
  rangeL: number,
  rangeR: number
): number[] {
  console.log('乱序数组 - 数据规模：' + n);
  let arr = new Array(n);
  console.assert(rangeL <= rangeR, 'rangeL 必须小于等于 rangeR！');
  for (let i = 0; i < n; i++) {
    arr[i] = getRandomIntInclusive(rangeL, rangeR);
  }
  return arr;
}

//生成近乎有序数组
function generateNearlyOrderedArray(n: number, swapTimes: number) {
  if (swapTimes) {
    console.log('近乎有序 - 数据规模：' + n);
  } else {
    console.log('完全有序 - 数据规模：' + n);
  }
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  for (let i = 0; i < swapTimes; i++) {
    let posx: number = getRandomIntInclusive(0, n - 1);
    let posy: number = getRandomIntInclusive(0, n - 1);
    [arr[posx], arr[posy]] = [arr[posy], arr[posx]];
  }
  return arr;
}

//打印数组
function printArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//是否有序
function isSorted<T>(arr: T[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//测试算法效率
function testSort<T>(
  sortName: string,
  sort: (arr: T[]) => void,
  array: T[]
): void {
  console.time(sortName);
  sort(array);
  console.timeEnd(sortName);
  console.assert(isSorted(array), '排序失败!');
}

//浅复制数组
function copyIntArray<T>(arr: T[]) {
  return [...arr];
}

export {
  generateRandomArray,
  printArray,
  testSort,
  copyIntArray,
  generateNearlyOrderedArray,
};
