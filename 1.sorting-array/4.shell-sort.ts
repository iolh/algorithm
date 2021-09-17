// O(n^3/2)

export function shellSort0<T>(arr: T[]): void {
  const { length } = arr;
  let j: number;
  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i++) {
      let tmp = arr[i];
      for (j = i; j >= gap && tmp < arr[j - gap]; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = tmp;
    }
  }
}

export function shellSort1<T>(arr: T[]): void {
  const { length } = arr;
  let h = 1;
  // 4 13 40 121
  while (h < length / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < length; i++) {
      const e = arr[i];
      let j: number;
      for (j = i; j >= h && e < arr[j - h]; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h = Math.floor(h / 3);
  }
}

// 1.什么是希尔排序？
// 缩小增量排序，是直接插入排序算法的优化

// 2.要比较多少次？
// 缩小增量直到为 1

// 3.每次缩小增量要比较多少次，这个边界是什么？
// 根据步长计算

// 本质上讲，希尔排序算法是直接插入排序算法的一种改进，
// 减少了其复制的次数，速度要快很多。
// 原因是，当n值很大时数据项每一趟排序需要移动的个数很少，但数据项的距离很长。
// 当n值减小时每一趟需要移动的数据增多，此时已经接近于它们排序后的最终位置。
// 正是这两种情况的结合才使希尔排序效率比插入排序高很多。Shell算法的性能与所选取的分组长度序列有很大关系。
// 只对特定的待排序记录序列，可以准确地估算关键词的比较次数和对象移动次数。
// 想要弄清关键词比较次数和记录移动次数与增量选择之间的关系，并给出完整的数学分析，今仍然是数学难题。
