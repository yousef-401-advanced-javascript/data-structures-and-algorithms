'use strict';
function BinarySearch (array, num) {
  let mid;
  if(array%2){mid = (array.length)/2 + .5;}
  else { mid = array.length/2;}

  for(let i = mid; i<array.length;){
    
    switch (true) {
    case num > array[i]:
      i++;
      break;
    case num < array[i]:
      i--;
      break;    
    
    default:
      return i;
    }
  }
  return -1;
    
}
console.log(BinarySearch([1,2,3,4,5,6],6));