'use strict';
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
module.exports = InsertionSort;
// console.log('Reverse-sorted', InsertionSort([20, 18, 12, 8, 5, -2]));
// console.log('Few uniques:',InsertionSort([5,12,7,5,5,7]));
// console.log('Nearly-sorted',InsertionSort([2,3,5,7,13,11]));
