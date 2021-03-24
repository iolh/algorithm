Array.prototype.selection_sort = function () {
  let min;
  for (let i = 0; i < this.length - 1; i++) {
    //(n-1)
    min = i;
    for (let j = i + 1; j < this.length; j++) {
      //(n-i-1)
      if (this[min] > this[j]) {
        min = j;
      }
    }
    // swap two value without temp variable
    if (min !== i) {
      this[min] = this[min] ^ this[i];
      this[i] = this[min] ^ this[i];
      this[min] = this[min] ^ this[i];
    }
  }
  return this;
};


//每次选择最小的元素  最开始是10个无序的元素 拿第1个元素 比较 9次     =>i= 0
//此时无序元素是9个，第一个元素已经排好序了。从这9个元素中的第一个元素，即原来数组的第2个元素，比较8次 => 1
//比较7次 => 2
//比较6次 => 3
//比较5次 => 4
//比较4次 => 5
//比较3次 => 6
//比较2次 => 7
//比较1次 => 8

// n本书排序，总共要进行n-1次选择，每次选择要经过n-i-1次比较(i是当前已选择次数,排序后第i+1个位置的元素，arr[i])
(n - 1)(n - i - 1);

for (let i = 0; i < arr.length - 1; i++) {
  //选择第i+1个位置
  //n-1
  // let min = i;
  // for (let j = i + 1; j < arr.length; j++) {
  //   //从第i+2个位置
  //   // n-i-1
  //   if (arr[min] > arr[j]) {
  //     min = j;
  //   }
  // }
  let min = findArrMinIdxFunc();
  swap(arr[min], arr[i]);
  // if (min != i) {
  //   swap(arr[min], arr[i]);
  // }
}

//选择次数（外循环）
//找出无序数组中最小的元素，比较赋值操作（内循环）
//放在最前面，交换操作

// 从第i+1个位置起最小的元素  i=0,1,2,3
// let arr = [0, 0, 4, 5, 2, 1];
// let min = i;
// for (let i = i + 1; i < arr.length; i++) {
//   if (arr[min] > arr[i]) {
//     min = i;
//   }
// }
// console.log('arr[min]:', arr[min]);
// console.log('min:', min);

function findArrMinIdxFunc(arr, index) {
  let min = index;
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[min] > arr[i]) {
      min = i;
    }
  }
  return min;
  console.log('arr[min]:', arr[min]);
  console.log('min:', min);
}
