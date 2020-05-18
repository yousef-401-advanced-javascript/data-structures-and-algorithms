'use strict';


function insertShiftArray(arr, num) {
  if (arr.length ===0||typeof(arr)==='number'){
    return false;
  }
  let mid;
  if (arr.length%2){
    mid = (arr.length / 2)+.5;
  }
  else{
    mid = (arr.length / 2); 

  }

  let theNewArr = [];
  let otherCounter = 0;
  for (let i = 0; i< arr.length; i++){
    if (otherCounter===mid){
      theNewArr[otherCounter] = num;
      i--;
    }
    else{
      theNewArr[otherCounter] = arr[i];
      
    }
    otherCounter++;
    
  }
  return theNewArr;

}

module.exports = insertShiftArray;