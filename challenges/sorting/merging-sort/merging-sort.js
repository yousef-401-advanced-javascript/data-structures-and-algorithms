'use strict';

function mergeSort(arr){
  let size = arr.length;
    
  if (size > 1){
    let mid = size%2 ?(size/2)+.5:size/2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, size);

    mergeSort(left);
    mergeSort(right);
    merging(left, right, arr);
  }
  function merging(left, right, arr){
    let i = 0;
    let j = 0;
    let k = 0;
    while(i<left.length && j<right.length){
      if(left[i]<=right[j]){
        arr[k] = left[i];
        i++;
      }
      else{
        arr[k] = right[j];
        j++;
      }
      k++;
    }
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
    
  }
  return arr;

}
module.exports = mergeSort;

// console.log('any arr',mergeSort([8,4,23,42,16,15]));
// console.log('Reverse-sorted', mergeSort([20, 18, 12, 8, 5, -2]));
// console.log('Few uniques:',mergeSort([5,12,7,5,5,7]));
// console.log('Nearly-sorted',mergeSort([2,3,5,7,13,11]));
