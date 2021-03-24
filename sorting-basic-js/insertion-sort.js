Array.prototype.insertion_sort = function () {
  let preIndex, current;
  for (let i = 1; i < this.length - 1; i++) {
    // preIndex = i - 1;
    // current = arr[i];
    // while (preIndex >= 0 && arr[preIndex] > current) {
    //   arr[preIndex + 1] = arr[preIndex];
    //   preIndex--;
    // }
    for (let j = i - 1; j > 0 && this[j - 1] > this[j]; j--) {
      [this[j], this[j - 1]] = [this[j], this[j - 1]];
    }
  }
  this[preIndex + 1] = current;
  return this;
};



//拆分步骤