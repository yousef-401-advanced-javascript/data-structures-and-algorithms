'use strict';


function quickSort(arr, left, right){
  if (left<right){
    let position = partition(arr, left, right);
    console.log(position);

    quickSort(arr, left, position-1);

    quickSort(arr, position+1, right);
  }

}
function partition(arr, left, right){
  let pivot = arr[right];
  let low = left-1;
  for (let i = left;i<right;i++){
    if(arr[i]<=pivot){
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low+1);
  return low+1;
}
function swap(arr, i, low){
  let temp = arr[i];
  arr[i]= arr[low];
  arr[low] = temp;
}
let arr = [8,4,23,42,16,15];
console.log(quickSort(arr, 0, arr.length-1));
console.log(arr);