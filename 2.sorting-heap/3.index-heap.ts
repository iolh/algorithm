export class IndexMaxHeap<T> {
  private data: T[];
  private indexes: number[];
  private reverse: number[];
  private count: number;

  private shiftUp(k: number): void {
    const { data, indexes } = this;
    while (k > 1 && data[indexes[Math.floor(k / 2)]] < data[indexes[k]]) {
      [indexes[Math.floor(k / 2)], indexes[k]] = [
        indexes[k],
        indexes[Math.floor(k / 2)],
      ];

      this.reverse[indexes[Math.floor(k / 2)]] = k / 2;
      this.reverse[indexes[Math.floor(k)]] = k;

      k = Math.floor(k / 2);
    }
  }

  private shiftDown(k: number): void {
    const { data, count, indexes } = this;
    // 确保有子树，只要有左孩子就可以了 即 count不能超过 2k 左孩子
    while (2 * k <= count) {
      let j = 2 * k;
      if (j + 1 <= count && data[indexes[j + 1]] > data[indexes[j]]) {
        j++;
      }

      if (data[indexes[k]] >= data[indexes[j]]) break;

      [indexes[k], indexes[j]] = [indexes[j], indexes[k]];

      this.reverse[indexes[k]] = k;
      this.reverse[indexes[j]] = j;
      k = j;
    }
  }

  constructor(arr?: T[]) {
    this.indexes = [];
    this.data = [];
    this.reverse = [];
    this.count = 0;
    // for (let i = 0; i < this.reverse; i++) {
    //   this.reverse[i] = 0;
    // }
    if (arr) {
      const { length } = arr;
      for (let i = 0; i < length; i++) {
        this.data[i + 1] = arr[i];
      }
      this.count = length;
      for (let i = Math.floor(this.count / 2); i >= 1; i--) {
        this.shiftDown(i);
      }
    }
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  insert(i: number, item: T): void {
    // 使用时从 0 索引,data存储数据
    i += 1;
    this.data[i] = item;
    // indexes 实现堆存储索引
    this.indexes[this.count + 1] = i;
    this.reverse[i] = this.count + 1;
    this.count++;
    this.shiftUp(this.count);
  }

  extractMax(): T {
    const { data, count, indexes } = this;
    const ret = data[indexes[1]];
    [indexes[1], indexes[count]] = [indexes[count], indexes[1]];
    this.count--;
    this.shiftDown(1);
    return ret;
  }

  extractMaxIndex(): number {
    const { count, indexes } = this;
    const ret = indexes[1] - 1;
    [indexes[1], indexes[count]] = [indexes[count], indexes[1]];
    this.reverse[indexes[1]] = 1;
    this.reverse[indexes[count]] = 0;

    this.count--;
    this.shiftDown(1);
    return ret;
  }

  testPrint() {
    console.log('\n' + '======== 数组实现堆存储 ========' + '\n');
    console.log(this.data);
  }

  getItem(i: number) {
    return this.data[i + 1];
  }

  contain(i: number): boolean {
    return this.reverse[i + 1] !== 0;
  }

  change(i: number, newItem: T): void {
    i += 1;
    this.data[i] = newItem;
    // for (let j = 1; j <= this.count; j++) {
    //   if ((this.indexes[j] = i)) {
    //     this.shiftUp(j);
    //     this.shiftDown(j);
    //     return;
    //   }
    // }

    // 优化
    let j = this.reverse[i];
    this.shiftUp(j);
    this.shiftDown(j);
  }
}

// https://coding.imooc.com/learn/questiondetail/l9eAQxY2EjVP0BjG.html
